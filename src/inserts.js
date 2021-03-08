db.clients.drop();
db.clients.insertMany([
    {
        _id: "56701928R",
        name: "Pedro",
        last_name: "García",
        province: "Cádiz",
        birth: new Date("1983-06-30"),
        phone: 612768014
    },
    { _id: "67561438S", name: "Roberto", last_name: "López", province: "Sevilla", birth: new Date("1964-02-10"), phone: 684230234 },
    { _id: "79124681J", name: "Clara", last_name: "García", province: "Madrid", birth: new Date("2005-09-23"), phone: 677182903 },
    { _id: "44951294B", name: "Santiago", last_name: "Martín", province: "Madrid", birth: new Date("1981-04-14"), phone: 611293049 },
    { _id: "69102940F", name: "Manuel", last_name: "Gómez", province: "Barcelona", birth: new Date("1997-02-12"), phone: 692812348 },
    { _id: "82913012B", name: "Daniel", last_name: "Herrera", province: "Madrid", birth: new Date("2004-08-13"), phone: 691902340 },
    { _id: "23718749S", name: "Rosa", last_name: "Martínez", province: "Barcelona", birth: new Date("2001-03-16"), phone: 642409655 },
    { _id: "47124892M", name: "Alejandro", last_name: "García", province: "Lugo", birth: new Date("1990-05-17"), phone: 612087243 },
    { _id: "45192045T", name: "David", last_name: "Ramírez", province: "Sevilla", birth: new Date("1996-05-21"), phone: 657422099 },
    { _id: "23897503E", name: "Miguel", last_name: "Jimenez", province: "Barcelona", birth: new Date("2003-03-29"), phone: 612394018 },
    { _id: "12784788P", name: "Isabel", last_name: "Ruiz", province: "Cádiz", birth: new Date("1953-12-06"), phone: 680412934 }
]);

db.employees.drop();
db.employees.insertMany([
    {
        _id: "57421029B",
        name: "Laura",
        last_name: "Romero",
        birth: new Date("1994-05-18"),
        position: {hours: 24, idCharge: 0 }
    },
    { _id: "64179203H", name: "Paco", last_name: "Moreno", birth: new Date("1988-09-07"), position: {hours: 32, idCharge: 0 }},
    { _id: "45293840Y", name: "Marcos", last_name: "Díaz", birth: new Date("1998-08-03"), position: {hours: 28, idCharge: 0 }},
    { _id: "49912812K", name: "Lucas", last_name: "Fernández", birth: new Date("1993-08-12"), position: {hours: 40, idCharge: 3 }},
    { _id: "44412859I", name: "Manuel", last_name: "Ibarra", birth: new Date("1987-02-18"), position: {hours: 19, idCharge: 0 }},
    { _id: "65892380U", name: "Julia", last_name: "Jímenez", birth: new Date("1990-04-06"), position: {hours: 21, idCharge: 0 }},
    { _id: "31920948P", name: "Maria", last_name: "Pacheco", birth: new Date("1976-02-12"), position: {hours: 20, idCharge: 2 }},
    { _id: "92427983O", name: "Darío", last_name: "Salas", birth: new Date("1973-06-24"), position: {hours: 20, idCharge: 0 }},
    { _id: "24918029S", name: "Juan", last_name: "Segura", birth: new Date("1978-04-10"), position: {hours: 20, idCharge: 0 }},
    { _id: "48298301D", name: "Eduardo", last_name: "Casas", birth: new Date("1989-02-30"), position: {hours: 24, idCharge: 2 }},
    { _id: "62938103L", name: "Raquel", last_name: "Benítez", birth: new Date("1994-06-21"), position: {hours: 20, idCharge: 0 }},
    { _id: "24988501A", name: "Manuel", last_name: "Aguilar", birth: new Date("1999-08-11"), position: {hours: 26, idCharge: 0 }},
    { _id: "23412483Y", name: "Alexis", last_name: "Pineda", birth: new Date("2000-01-19"), position: {hours: 20, idCharge: 0 }},
    { _id: "53490102P", name: "Natalia", last_name: "Sánchez", birth: new Date("1997-11-04"), position: {hours: 32, idCharge: 0 }},
    { _id: "67923801A", name: "Ana", last_name: "Vela", birth: new Date("1992-12-09"), position: {hours: 39, idCharge: 3 }},
    { _id: "23498058N", name: "Mario", last_name: "Ayala", birth: new Date("1986-09-10"), position: {hours: 20, idCharge: 1 }}
]);


db.products.drop();
db.products.insertMany([
    {
        _id: 100,
        name: "Patatas",
        unit_price: 2,
        idSupplier: ["VDF"]
    },
    { _id: 101, name: "Filete de ternera", unit_price: 12, idSupplier: ["CDS", "ETP"] },
    { _id: 102, name: "Pechuga de pollo", unit_price: 5, idSupplier: ["CDS", "ETP"] },
    { _id: 103, name: "Chicle", unit_price: 1, idSupplier: ["IRT"] },
    { _id: 104, name: "Huevo", unit_price: 3, idSupplier: ["VDF"] },
    { _id: 105, name: "Lechuga", unit_price: 4, idSupplier: ["VDF", "ETP"] },
    { _id: 106, name: "Coliflor", unit_price: 4, idSupplier: ["VDF", "ETP"] },
    { _id: 107, name: "Tomate", unit_price: 2, idSupplier: ["VDF", "ETP"] },
    { _id: 108, name: "Cebolla", unit_price: 2, idSupplier: ["VDF", "ETP"] },
    { _id: 109, name: "Mayonesa", unit_price: 2, idSupplier: ["ETP", "CDS", "IRT"] },
    { _id: 110, name: "Agua", unit_price: 0.5, idSupplier: ["CDS", "ETP"] },
    { _id: 111, name: "Nocilla", unit_price: 4, idSupplier: ["IRT"] },
    { _id: 112, name: "Avena", unit_price: 6, idSupplier: ["IRT"] },
    { _id: 113, name: "Aceite de oliva", unit_price: 3, idSupplier: ["VDF", "CDS"] },
    { _id: 114, name: "Licor", unit_price: 5, idSupplier: ["ETP", "IRT"] },
    { _id: 115, name: "Garbanzos", unit_price: 3, idSupplier: ["ETP"] },
    { _id: 116, name: "Lentejas", unit_price: 3, idSupplier: ["ETP"] },
    { _id: 117, name: "Caldo de pollo", unit_price: 5, idSupplier: ["ETP", "CDS"] },
    { _id: 118, name: "Atún", unit_price: 10, idSupplier: ["CDS", "ETP"] },
    { _id: 119, name: "Cazón", unit_price: 10, idSupplier: ["CDS", "ETP"] },
]);


db.sales.drop();
db.sales.insertMany([
    {
        _id: 200,
        DNIclient: "67561438S",
        DNIemployee: "64179203H",
        commerce: "Sevilla",
        sale: [{ _id: 102, quantity: 3 }, { _id: 106, quantity: 4 }, { _id: 113, quantity: 5 }],
        date: new Date("2020-06-08"),
    },
    { _id: 201, DNIclient: "67561438S", DNIemployee: "64179203H", commerce: "Sevilla", sale: [{ _id: 111, quantity: 4 }, { _id: 112, quantity: 2 }, { _id: 108, quantity: 4 }, , { _id: 107, quantity: 3 }], date: new Date("2020-04-11") },
    { _id: 202, DNIclient: "82913012B", DNIemployee: "57421029B", commerce: "Madrid", sale: [{ _id: 112, quantity: 2 }, { _id: 110, quantity: 3 }, { _id: 107, quantity: 4 }, { _id: 103, quantity: 1 }, { _id: 104, quantity: 2 }], date: new Date("2020-02-21") },
    { _id: 203, DNIclient: "79124681J", DNIemployee: "57421029B", commerce: "Madrid", sale: [{ _id: 103, quantity: 3 }, { _id: 110, quantity: 4 }, { _id: 104, quantity: 6 }], date: new Date("2020-08-28") },
    { _id: 204, DNIclient: "67561438S", DNIemployee: "44412859I", commerce: "Sevilla", sale: [{ _id: 103, quantity: 1 }, { _id: 111, quantity: 3 }, { _id: 113, quantity: 6 }], date: new Date("2020-01-14") },
    { _id: 205, DNIclient: "69102940F", DNIemployee: "23412483Y", commerce: "Barcelona", sale: [{ _id: 119, quantity: 2 }, { _id: 116, quantity: 3 }, { _id: 117, quantity: 2 }], date: new Date("2020-02-27") },
    { _id: 206, DNIclient: "44951294B", DNIemployee: "23498058N", commerce: "Madrid", sale: [{ _id: 114, quantity: 4 }, { _id: 112, quantity: 2 }, { _id: 110, quantity: 5 }], date: new Date("2020-04-27") },
    { _id: 207, DNIclient: "23897503E", DNIemployee: "62938103L", commerce: "Barcelona", sale: [{ _id: 107, quantity: 3 }, { _id: 103, quantity: 5 }, { _id: 101, quantity: 2}], date: new Date("2020-09-26") },
    { _id: 208, DNIclient: "79124681J", DNIemployee: "23498058N", commerce: "Madrid", sale: [{ _id: 110, quantity: 4 }, { _id: 114, quantity: 3 }, { _id: 103, quantity: 2 }], date: new Date("2020-10-26") },
    { _id: 209, DNIclient: "23897503E", DNIemployee: "23412483Y", commerce: "Barcelona", sale: [{ _id: 103, quantity: 1 }, { _id: 106, quantity: 2 }], date: new Date("2020-04-14") },
    { _id: 210, DNIclient: "56701928R", DNIemployee: "64179203H", commerce: "Sevilla", sale: [{ _id: 115, quantity: 4 }], date: new Date("2020-11-25") },
    { _id: 211, DNIclient: "12784788P", DNIemployee: "64179203H", commerce: "Sevilla", sale: [{ _id: 116, quantity: 3 },{ _id: 113, quantity: 2 },{ _id: 103, quantity: 3 }], date: new Date("2021-01-09") },
    { _id: 212, DNIclient: "69102940F", DNIemployee: "62938103L", commerce: "Barcelona", sale: [{ _id: 105, quantity: 3 }, { _id: 5, quantity: 3 }], date: new Date("2020-02-25") },
    { _id: 213, DNIclient: "47124892M", DNIemployee: "65892380U", commerce: "Lugo", sale: [{ _id: 103, quantity: 1 }], date: new Date("2020-12-17") },
    { _id: 214, DNIclient: "69102940F", DNIemployee: "23498058N", commerce: "Barcelona", sale: [{ _id: 104, quantity: 6 }], date: new Date("2020-06-21") }
]);

db.charge.drop();
db.charge.insertMany([
    {
        _id: 0,
        charge: "cashier",
        hour_salary: 10,
    },
    { _id: 1, charge: "technician", hour_salary: 15 },
    { _id: 2, charge: "cleaner", hour_salary: 5 },
    { _id: 3, charge: "security", hour_salary: 10 },
]);

db.supplier.drop();
db.supplier.insertMany([
    {
        _id: "VDF",
        name: "Verdifresh",
        country: "Spain"
    },
    { _id: "CDS", name: "Cidacos", country: "France"},
    { _id: "IRT", name: "Iparlat", country: "Spain"},
    { _id: "ETP", name: "Entrepinares", country: "Portugal"}
]);