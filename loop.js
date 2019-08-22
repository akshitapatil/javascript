var i = 0;
var j=0;
for(i=0;i<4;i++)
{
    for(j=0;j<=i;j++)
    {
        process.stdout.write(`* `);
    }
    console.log();
}
console.log("\n");
var i = 0;
var j=0;
while(i<4)
{
    while(j<=i)
    {
        process.stdout.write(`* `);
        j++;
    }
    console.log();
    i++;
    j=0;
}