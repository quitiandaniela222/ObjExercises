const persona = { nombre: "Juan", edad: 25 };
for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
