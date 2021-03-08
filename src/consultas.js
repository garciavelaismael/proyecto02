// 1. Esta consulta muestra las 10 ventas con mayor quantity de products vendidos.

db.sales.aggregate([
    {
        $lookup:
        {
            from: "products",
            localField: "sale._id",
            foreignField: "_id",
            as: "product"
        }
    },
    {
        $unwind: "$product"
    },
    {
        $group:
        {
            _id:
            {
                month: { $month: "$date" },
                year: { $year: "$date" },
                quantity: { $sum: "$sale.quantity" },
            },
            name:
            {
                $addToSet: "$product.name"
            }
        }
    },
    {
        $project:
        {
            _id: 1,
            name: "$name"
        }
    },
    {
        $sort: { "_id.quantity": -1 }
    },
    {
        $limit: 10
    }
]);

/*RESULTADO
{ "_id" : { "month" : 4, "year" : 2020, "quantity" : 13 }, "name" : [ "Tomate", "Cebolla", "Avena", "Nocilla" ] }
{ "_id" : { "month" : 8, "year" : 2020, "quantity" : 13 }, "name" : [ "Chicle", "Huevo", "Agua" ] }
{ "_id" : { "month" : 2, "year" : 2020, "quantity" : 12 }, "name" : [ "Chicle", "Huevo", "Tomate", "Avena", "Agua" ] }
{ "_id" : { "month" : 4, "year" : 2020, "quantity" : 11 }, "name" : [ "Licor", "Agua", "Avena" ] }
{ "_id" : { "month" : 1, "year" : 2020, "quantity" : 10 }, "name" : [ "Chicle", "Aceite de oliva", "Nocilla" ] }
{ "_id" : { "month" : 9, "year" : 2020, "quantity" : 10 }, "name" : [ "Filete de ternera", "Chicle", "Tomate" ] }
{ "_id" : { "month" : 10, "year" : 2020, "quantity" : 9 }, "name" : [ "Licor", "Chicle", "Agua" ] }
{ "_id" : { "month" : 1, "year" : 2021, "quantity" : 8 }, "name" : [ "Aceite de oliva", "Chicle", "Lentejas" ] }
{ "_id" : { "month" : 2, "year" : 2020, "quantity" : 7 }, "name" : [ "Caldo de pollo", "Lentejas", "Cazón" ] }
{ "_id" : { "month" : 6, "year" : 2020, "quantity" : 6 }, "name" : [ "Huevo" ] }
*/

// 2. Muestra información del empleado con su salario total. Y esto se guarda en una colección llamada tSalary.

db.employees.aggregate([
    {
        $lookup: {
            from: "charge",
            localField: "position.idCharge",
            foreignField: "_id",
            as: "workcharge"
        }
    },
    {
        $project: {
            "_id": 0,
            Employee: { $concat: ["$name", " ", "$last_name"] },
            DNIemployee: "$_id",
            workedHours: "$position.hours",
            birth: {
                $dateToString: {
                    format: '%Y-%m-%d',
                    date: {
                        $dateFromString: {
                            dateString: { $toString: "$birth" }
                        }
                    }
                }
            },
            hour_salary: "$workcharge.hour_salary"
        }
    },
    {
        $unwind: "$hour_salary"
    },
    {
        $project: {
            "Employee": 1,
            "DNIemployee": 1,
            "birth": 1,
            salary: { $avg: { $multiply: ["$workedHours", "$hour_salary"] } },
        }
    },
    {
        $merge: "tSalary"
    }
]);

/*RESULTADO
{ "Employee" : "Laura Romero", "DNIemployee" : "57421029B", "birth" : "1994-05-18", "salary" : 240 }
{ "Employee" : "Paco Moreno", "DNIemployee" : "64179203H", "birth" : "1988-09-07", "salary" : 320 }
{ "Employee" : "Marcos Díaz", "DNIemployee" : "45293840Y", "birth" : "1998-08-03", "salary" : 280 }
{ "Employee" : "Lucas Fernández", "DNIemployee" : "49912812K", "birth" : "1993-08-12", "salary" : 400 }
{ "Employee" : "Manuel Ibarra", "DNIemployee" : "44412859I", "birth" : "1987-02-18", "salary" : 190 }
{ "Employee" : "Julia Jímenez", "DNIemployee" : "65892380U", "birth" : "1990-04-06", "salary" : 210 }
{ "Employee" : "Maria Pacheco", "DNIemployee" : "31920948P", "birth" : "1976-02-12", "salary" : 100 }
{ "Employee" : "Darío Salas", "DNIemployee" : "92427983O", "birth" : "1973-06-24", "salary" : 200 }
{ "Employee" : "Juan Segura", "DNIemployee" : "24918029S", "birth" : "1978-04-10", "salary" : 200 }
{ "Employee" : "Eduardo Casas", "DNIemployee" : "48298301D", "birth" : "1970-01-01", "salary" : 120 }
{ "Employee" : "Raquel Benítez", "DNIemployee" : "62938103L", "birth" : "1994-06-21", "salary" : 200 }
{ "Employee" : "Manuel Aguilar", "DNIemployee" : "24988501A", "birth" : "1999-08-11", "salary" : 260 }
{ "Employee" : "Alexis Pineda", "DNIemployee" : "23412483Y", "birth" : "2000-01-19", "salary" : 200 }
{ "Employee" : "Natalia Sánchez", "DNIemployee" : "53490102P", "birth" : "1997-11-04", "salary" : 320 }
{ "Employee" : "Ana Vela", "DNIemployee" : "67923801A", "birth" : "1992-12-09", "salary" : 390 }
{ "Employee" : "Mario Ayala", "DNIemployee" : "23498058N", "birth" : "1986-09-10", "salary" : 300 }
*/

// 3. Saca el total, el maximo y la media de ventas de cada venta y el producto más vendido de dicha venta. 

db.sales.aggregate([
    {
        $unwind: "$sale"
    },
    {
        $group: {
            _id: {
                date: {
                    $dateToString: {
                        format: '%Y-%m-%d',
                        date: {
                            $dateFromString: {
                                dateString: { $toString: "$date" }
                            }
                        }
                    }
                }
            },
            totalSales: { $sum: "$sale.quantity" },
            maxItems: { $max: "$sale.quantity" },
            avgItems: { $avg: "$sale.quantity" },
            mostSold: { $max: "$sale._id" }
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "mostSold",
            foreignField: "_id",
            as: "item"
        }
    },
    {
        $project: {
            _id: 1,
            "totalSales": 1,
            "maxItems": 1,
            avgItems: { $round: ["$avgItems", 2] },
            mostSold: "$item.name",
        }
    },
    {
        $sort: {
            totalSales: -1
        }
    },
]);

/*RESULTADO
{ "_id" : { "date" : "2020-08-28" }, "totalSales" : 13, "maxItems" : 6, "avgItems" : 4.33, "mostSold" : [ "Agua" ] }
{ "_id" : { "date" : "2020-04-11" }, "totalSales" : 13, "maxItems" : 4, "avgItems" : 3.25, "mostSold" : [ "Avena" ] }
{ "_id" : { "date" : "2020-02-21" }, "totalSales" : 12, "maxItems" : 4, "avgItems" : 2.4, "mostSold" : [ "Avena" ] }
{ "_id" : { "date" : "2020-04-27" }, "totalSales" : 11, "maxItems" : 5, "avgItems" : 3.67, "mostSold" : [ "Licor" ] }
{ "_id" : { "date" : "2020-09-26" }, "totalSales" : 10, "maxItems" : 5, "avgItems" : 3.33, "mostSold" : [ "Tomate" ] }
{ "_id" : { "date" : "2020-01-14" }, "totalSales" : 10, "maxItems" : 6, "avgItems" : 3.33, "mostSold" : [ "Aceite de oliva" ] }
{ "_id" : { "date" : "2020-10-26" }, "totalSales" : 9, "maxItems" : 4, "avgItems" : 3, "mostSold" : [ "Licor" ] }
{ "_id" : { "date" : "2021-01-09" }, "totalSales" : 8, "maxItems" : 3, "avgItems" : 2.67, "mostSold" : [ "Lentejas" ] }
{ "_id" : { "date" : "2020-02-27" }, "totalSales" : 7, "maxItems" : 3, "avgItems" : 2.33, "mostSold" : [ "Cazón" ] }
{ "_id" : { "date" : "2020-02-25" }, "totalSales" : 6, "maxItems" : 3, "avgItems" : 3, "mostSold" : [ "Lechuga" ] }
{ "_id" : { "date" : "2020-06-21" }, "totalSales" : 6, "maxItems" : 6, "avgItems" : 6, "mostSold" : [ "Huevo" ] }
{ "_id" : { "date" : "2020-11-25" }, "totalSales" : 4, "maxItems" : 4, "avgItems" : 4, "mostSold" : [ "Garbanzos" ] }
{ "_id" : { "date" : "2020-04-14" }, "totalSales" : 3, "maxItems" : 2, "avgItems" : 1.5, "mostSold" : [ "Coliflor" ] }
{ "_id" : { "date" : "2020-12-17" }, "totalSales" : 1, "maxItems" : 1, "avgItems" : 1, "mostSold" : [ "Chicle" ] }
*/

// 4. Se quiere saber los productos que compran los menores de 18 años, en caso de ser ilegal su venta se avisará en la info.

db.sales.aggregate([
    {
        $lookup: {
            from: "clients",
            localField: "DNIclient",
            foreignField: "_id",
            as: "client"
        }
    },
    { $unwind: "$client" },
    {
        $match: {
            "client.birth": { $gte: ISODate("2003-01-01T00:00:00.0Z")}
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "sale._id",
            foreignField: "_id",
            as: "product"
        }
    },
    {
        $lookup: {
            from: "employees",
            localField: "DNIemployee",
            foreignField: "_id",
            as: "employee"
        }
    },
    { $unwind: "$employee" },
    {
        $group:
        {
            _id:
            {
                idSale: "$product._id",
                Client: { $concat: ["$client.name", " ", "$client.last_name"] },
                Birth: {
                    $dateToString: {
                        format: '%Y-%m-%d',
                        date: {
                            $dateFromString: {
                                dateString: { $toString: "$client.birth" }
                            }
                        }
                    }
                },
                Employee: { $concat: ["$employee.name", " ", "$employee.last_name"] },
                Product: "$product.name"
            }
        }
    },
    {
        $project:
        {
            "Client": 1,
            "Product": 1,
            "info":
            {
                $cond:
                {
                    if: { $in: [114, "$_id.idSale"] }, then: "PROHIBIDO!", else: "OK!"
                }
            }
        }
    },
    { $unset: ["_id.idSale"] }
]);

/*RESULTADO
{ "_id" : { "Client" : "Miguel Jimenez", "Birth" : "2003-03-29", "Employee" : "Alexis Pineda", "Product" : [ "Chicle", "Coliflor" ] }, "info" : "OK!" }
{ "_id" : { "Client" : "Miguel Jimenez", "Birth" : "2003-03-29", "Employee" : "Raquel Benítez", "Product" : [ "Filete de ternera", "Chicle", "Tomate" ] }, "info" : "OK!" }
{ "_id" : { "Client" : "Clara García", "Birth" : "2005-09-23", "Employee" : "Laura Romero", "Product" : [ "Chicle", "Huevo", "Agua" ] }, "info" : "OK!" }
{ "_id" : { "Client" : "Daniel Herrera", "Birth" : "2004-08-13", "Employee" : "Laura Romero", "Product" : [ "Chicle", "Huevo", "Tomate", "Agua", "Avena" ] }, "info" : "OK!" }
{ "_id" : { "Client" : "Clara García", "Birth" : "2005-09-23", "Employee" : "Mario Ayala", "Product" : [ "Chicle", "Agua", "Licor" ] }, "info" : "PROHIBIDO!" }
*/