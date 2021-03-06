// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты
console.log('\n#1');
var a = 1, b = 1, c, d;

console.log("a = " + a + ", c = " + c);
c = ++a;
console.log("c = ++a.\na = " + a + ", c = " + c);
console.log("Преинкремент. \nСначала происходит инкремент, а потом присваивание.");


console.log("\nb = " + b + ", d = " + d);
d = b++;
console.log("d = b++. \nb = " + b + ", d = " + d);
console.log("Постинкремент.\nСначала в d присваивается значение из b, а потом происходит увеличение");

console.log("\nc = " + c + ", a = " + a);
c = (2+ ++a);
console.log("c = (2+ ++a)\nc = " + c + ", a = " + a);
console.log("Сначала выполняется выражение в скобках (преинкремент и сложение), а потом происходит присваивание");

console.log("\nb = " + b + ", d = " + d);
d = (2+ b++);
console.log("d = (2+ b++)\nb = " + b + ", d = " + d);
console.log("Сначала выполняется выражение в скобках (постинкремент и сложение), а потом происходит присваивание");

console.log("\na = " + a);
console.log("b = " + b);
console.log("a и b принимают свои значения после всех операций над ними");