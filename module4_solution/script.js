var names=new Array();
names[0]="David";
names[1]="John";
names[2]="jenny";
names[3]="Thomas";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paul";
names[8]="Jim";
names[9]="jerry";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}