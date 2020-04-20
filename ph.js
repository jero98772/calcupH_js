// rotate="90" html para rotar
function cointain(){
multiple_0=document.getElementById("multiple_0");
sqrt_1=document.getElementById("sqrt_1");
log_2=document.getElementById("log_2");
pH_subtraction_3=document.getElementById("pH_subtraction_3");
H_o_OH=document.getElementById("h_o_oh_3.5");
acid_or_base=document.getElementById("acid_or_base");
moles=document.getElementById("moles").value;
Kb=document.getElementById("Kb").value;
Ka=document.getElementById("Ka").value;
sal=document.getElementById("sal").value;
paso_0=document.getElementById("paso_0");
paso_5=document.getElementById("paso_5");
paso_4=document.getElementById("paso_4");
paso_35=document.getElementById("paso_3.5");
paso_3=document.getElementById("paso_3");
paso_2=document.getElementById("paso_2");
paso_1=document.getElementById("paso_1");
verificar=document.getElementById("verificar");
exponent=document.getElementById("exponent").value;
pH=document.getElementById("pH").value;
pOH=document.getElementById("pOH").value;
Select = document.From2.Select2;
Select=document.getElementById('Select1');
selected = Select.options[Select.selectedIndex].value;
cuadratic = (a, b, c) => {return (-b-((b**(1/2)) - (4*a*c)))/(2*a), (-b+((b**(1/2)) - (4*a*c)))/(2*a);}
}
function calcuph() {
cointain();
if (selected=='POH') {
	Kb.disabled = true;
	Ka.disabled=false;
	sal.disabled=false;
	poh()
}
if (selected=='PH') {
	Ka.disabled = true;
	Kb.disabled=false;
	sal.disabled=false;
	ph()
}
if (selected=='henderson_hasselbalch') {
	Ka.disabled = true;
	Kb.disabled=false;
	henderson_hasselbalch_ph(sal,moles,Ka)
}
if (selected=='OH_pH') {
	Ka.disabled = false;
	Kb.disabled=false;
	OH_when_have_pH()
}
if (selected=='H_pH') {
	Ka.disabled = false;
	Kb.disabled=false;
	H_when_have_pH()
}
if (selected=='OH_pOH') {
	Ka.disabled = false;
	Kb.disabled=false;
	OH_when_have_pOH()
}
if (selected=='OH_mol') {
	Ka.disabled = false;
	Kb.disabled=false;
	OH_when_have_mol()
}
if (selected=='H_mol') {
	Ka.disabled = false;
	Kb.disabled=false;
	OH_when_have_mol()
}
}
function ph(){
cointain()
	base="<h1> y es una acido</h1>"
	console.log("Kb");
	acid_or_base.innerHTML=base;
	paso_0.innerHTML="paso 0 multiplicacion";
	paso_1.innerHTML="paso 1 raiz cuadrada";
	paso_2.innerHTML="paso 2 logaritmo";
	//paso_3.innerHTML="paso 3 subtraccion a PH";
	paso_4.innerHTML="paso 4 acido o base";
	paso_5.innerHTML="paso 5 verificar";

	exponent=parseInt(exponent);
	console.log(exponent)
	Ka=parseFloat(Ka);
	console.log(Ka)
	moles=parseFloat(moles);
	console.log(moles)
	//divide= Math.pow(Ka,exponent)
	divide=Ka*10**(exponent)
	//divide= Ka*moles
	console.log(divide)
	//divide/=moles
	divide = cuadratic(moles,divide,0) ;
	console.log("divicion",divide)
	multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Ka)+"*10**"+exponent+"  /  "+String(moles)+"  =  "+String(divide)+"</h2>"
	divide.innerHTML=multiple_out

	sqrt= Math.sqrt(parseFloat(divide));
	console.log(sqrt)
	sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(divide)+"  )=  "+String(sqrt)+"</h2>"
	sqrt_1.innerHTML=sqrt_out
	
	log=-Math.log10(parseFloat(sqrt));
	console.log(log)
	if (log>0) {
		log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"+"<br/>"
		log_out+="<center><h1>"+String(log)+"</h1></center>"
		log_2.innerHTML=log_out
		console.log("positivos")
		//pH_subtraction =14-log
		//pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+"="+String(pH_subtraction)+"</h2>"
		//pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction)+"</h1></center>"
		//pH_subtraction_3.innerHTML=pH_subtraction_out
		//console.log(pH_subtraction)
		console.log("verificar")
		multiple=Ka*10**(exponent)
		multiple/=parseFloat(moles)
		console.log(divide)
		sqrt=sqrt= Math.sqrt(parseFloat(divide));
		console.log(sqrt)
		log=-Math.log10(parseFloat(sqrt));
		console.log(log)
		//pH_subtraction2 =14-log
		//console.log("pH_subtraction2",pH_subtraction2)
		bool=Boolean(log<7  && log>0 );
		console.log(bool)
		verificar.innerHTML="posble error de calculo =(";
		if (bool) {
			//console.log("paso",pH_subtraction2)
			multiple=Ka*10**(exponent)
			multiple*=moles
			console.log(multiple)
			multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Ka)+"*10**"+exponent+"  *  "+String(moles)+"  =  "+String(multiple)+"</h2>"
			multiple_0.innerHTML=multiple_out
			sqrt=Math.sqrt(multiple);
			sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(multiple)+"  )=  "+String(sqrt)+"</h2>"
			sqrt_1.innerHTML=sqrt_out
			console.log(sqrt)
			log=-Math.log10(parseFloat(sqrt));
			console.log(log)
			log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"+"<br/>"
			log_out+="<center><h1>"+String(log)+"</h1></center>"
			log_2.innerHTML=log_out
			//pH_subtraction2 =14-log
			//console.log(pH_subtraction2)
			//pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+"="+String(pH_subtraction2)+"</h2>"
			//pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction2)+"</h1></center>"
			//pH_subtraction_3.innerHTML=pH_subtraction_out
			//console.log(pH_subtraction2)
			verificar.innerHTML="verificado = )";
			return log;
		}
		return log;

	}
	else{
		log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"+"<br/>"
		log_out+="<center><h1>"+String(log)+"</h1></center>"
		log_2.innerHTML=log_out
		console.log("positivos")
		//pH_subtraction =14+log
		//pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+"="+String(pH_subtraction)+"</h2>"
		//pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction)+"</h1></center>"
		//pH_subtraction_3.innerHTML=pH_subtraction_out
		//console.log(pH_subtraction)
		console.log("verificar")
		multiple=Ka*10**(exponent)
		multiple/=parseFloat(moles)
		console.log(divide)
		sqrt=sqrt= Math.sqrt(parseFloat(divide));
		console.log(sqrt)
		log=-Math.log10(parseFloat(sqrt));
		console.log(log)
		pH_subtraction2 =14+log
		console.log("pH_subtraction2",pH_subtraction2)
		bool=Boolean(log<7  && log>0 );		console.log(bool)

		if (bool) {
			//console.log("paso",pH_subtraction2)
			multiple=Ka*10**(exponent)
			multiple*=moles
			console.log(multiple)
			multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Ka)+"*10**"+exponent+"  *  "+String(moles)+"  =  "+String(multiple)+"</h2>"
			multiple_0.innerHTML=multiple_out
			sqrt=Math.sqrt(multiple);
			sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(multiple)+"  )=  "+String(sqrt)+"</h2>"
			sqrt_1.innerHTML=sqrt_out
			console.log(sqrt)
			log=-Math.log10(parseFloat(sqrt));
			console.log(log)
			log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"+"<br/>"
			log_out+="<center><h1>"+String(log)+"</h1></center>"
			log_2.innerHTML=log_out
			//pH_subtraction2 =14-log
			//pH_subtraction2 =14-log
			//console.log(pH_subtraction2)
			//pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+"="+String(pH_subtraction2)+"</h2>"
			//pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction2)+"</h1></center>"
			//pH_subtraction_3.innerHTML=pH_subtraction_out
			//console.log(pH_subtraction2)
			verificar.innerHTML="verificado = )";
		return log;

		}
	return log;
	}
return log;

}
function OH_when_have_mol(){
cointain()
	pOH=poh()
	OH=10**-pOH
	OH_when_have_mol="<h2></br>"+"10^-"+pOH+"=<center>"+OH+"</center></h2>"
	H_o_OH.innerHTML=OH_when_have_mol
	paso_35.innerHTML="paso 3.5 halar OH- depende del caso ";
}
function H_when_have_mol(){
cointain()
	pH=ph()
	H=10**-pH
	H_when_have_mol="<h2></br>"+"10^-"+pH+"=<center>"+H+"</center></h2>"
	H_o_OH.innerHTML=H_when_have_mol
	paso_35.innerHTML="paso 3.5 halar H+ depende del caso ";
}
function poh(){
cointain()

	acido="<h1> y es un base</h1>"
	acid_or_base.innerHTML=acido;
	paso_0.innerHTML="paso 0 multiplicacion";
	paso_1.innerHTML="paso 1 raiz cuadrada";
	paso_2.innerHTML="paso 2 logaritmo";
	paso_3.innerHTML="paso 3 subtraccion a PH";
	paso_4.innerHTML="paso 4 acido o base";
	paso_5.innerHTML="paso 5 verificar";

	exponent=parseInt(exponent);
	console.log(exponent)
	Kb=parseFloat(Kb);
	console.log(Kb)
	moles=parseFloat(moles);
	console.log(moles)
	//divide= Math.pow(Ka,exponent)
	divide=Kb*10**(exponent)
	//divide= Ka*moles
	console.log(divide)
	//divide/=moles
	divide = cuadratic(moles,divide,0) ;
	console.log(divide)
	multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Kb)+"*10**"+exponent+"  /  "+String(moles)+"  =  "+String(divide)+"</h2>"
	divide.innerHTML=multiple_out

	sqrt= Math.sqrt(parseFloat(divide));
	console.log(sqrt)
	sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(divide)+"  )=  "+String(sqrt)+"</h2>"
	sqrt_1.innerHTML=sqrt_out
	
	log=-Math.log10(parseFloat(sqrt));
	console.log(log)
	if (log>0) {
		log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"
		log_2.innerHTML=log_out
		console.log("positivos")
		pH_subtraction =14-log
		pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+String(log)+"</h2>"
		pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction)+"</h1></center>"
		pH_subtraction_3.innerHTML=pH_subtraction_out
		console.log(pH_subtraction)
		console.log("verificar")
		multiple=Kb*10**(exponent)
		multiple/=parseFloat(moles)
		console.log(divide)
		sqrt=sqrt= Math.sqrt(parseFloat(divide));
		console.log(sqrt)
		log=-Math.log10(parseFloat(sqrt));
		console.log(log)
		pH_subtraction2 =14-log
		console.log("pH_subtraction2",pH_subtraction2)
		bool=Boolean(pH_subtraction2<14  && pH_subtraction2>7 || pH_subtraction<14 && pH_subtraction>7  );
		console.log(bool)
		verificar.innerHTML="posble error de calculo =( ";
		if (bool) {
			console.log("paso",pH_subtraction2)
			multiple=Kb*10**(exponent)
			multiple*=moles
			console.log(multiple)
			multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Kb)+"*10**"+exponent+"  *  "+String(moles)+"  =  "+String(multiple)+"</h2>"
			multiple_0.innerHTML=multiple_out
			sqrt=Math.sqrt(multiple);
			sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(multiple)+"  )=  "+String(sqrt)+"</h2>"
			sqrt_1.innerHTML=sqrt_out
			console.log(sqrt)
			log=-Math.log10(parseFloat(sqrt));
			console.log(log)
			log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"
			log_2.innerHTML=log_out
			pH_subtraction2 =14-log
			console.log(pH_subtraction2)
			pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+String(log)+"</h2>"
			pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction2)+"</h1></center>"
			pH_subtraction_3.innerHTML=pH_subtraction_out
			console.log(pH_subtraction2)
			verificar.innerHTML="verificado = )";
			return pH_subtraction2;		
		}
	return pH_subtraction2;
	}

	else{
		log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"
		log_2.innerHTML=log_out
		console.log("positivos")
		pH_subtraction =14+log
		pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+String(log)+"</h2>"
		pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction)+"</h1></center>"
		pH_subtraction_3.innerHTML=pH_subtraction_out
		console.log(pH_subtraction)
		console.log("verificar")
		multiple=Kb*10**(exponent)
		multiple/=parseFloat(moles)
		console.log(divide)
		sqrt=sqrt= Math.sqrt(parseFloat(divide));
		console.log(sqrt)
		log=-Math.log10(parseFloat(sqrt));
		console.log(log)
		pH_subtraction2 =14+log
		console.log("pH_subtraction2",pH_subtraction2)
		bool=Boolean(pH_subtraction2<14  && pH_subtraction2>7 || pH_subtraction<14 && pH_subtraction>7  );
		console.log(bool)
		if (bool) {
			console.log("paso",pH_subtraction2)
			multiple=Kb*10**(exponent)
			multiple*=moles
			console.log(multiple)
			multiple_out="<h2>"+"multiplicacion para hallar X2 que es OH- o H+ :</br>"+String(Kb)+"*10**"+exponent+"  *  "+String(moles)+"  =  "+String(multiple)+"</h2>"
			multiple_0.innerHTML=multiple_out
			sqrt=Math.sqrt(multiple);
			sqrt_out="<h2>"+" saca  raiz cudrada para hallar X1 OH- o H+ :</br>"+"sqrt(  "+String(multiple)+"  )=  "+String(sqrt)+"</h2>"
			sqrt_1.innerHTML=sqrt_out
			console.log(sqrt)
			log=-Math.log10(parseFloat(sqrt));
			console.log(log)
			log_out="<h2>"+" log es formuala de  OH-:</br>"+"log(  "+String(sqrt)+"  )=  "+String(log)+"</h2>"
			log_2.innerHTML=log_out
			pH_subtraction2 =14-log
			console.log(pH_subtraction2)
			pH_subtraction_out="<h2>"+" se resta al 14 que es pH  se obtiene el pOH:</br>"+""+"14  -"+"  "+String(log)+"</h2>"
			pH_subtraction_out+="<center><h1>"+"="+String(pH_subtraction2)+"</h1></center>"
			pH_subtraction_3.innerHTML=pH_subtraction_out
			console.log(pH_subtraction2)
			verificar.innerHTML="verificado = )";
	return pH_subtraction2;

	}
	return pH_subtraction2;
 }
return pH_subtraction2;
}
function H_when_have_pH(){
	cointain()
	pH=parseFloat(pH);
	condition=Boolean(pH<7 && pH>0)
	if (condition) {
	console.log(pH)
	H=10**-pH
	H_when_have_pH="<h2></br>"+"10^-"+pH+"=<center>"+H+"</center></h2>"
	multiple_0.innerHTML=H_when_have_pH
	}
}	
function OH_when_have_pH(){
	cointain()
	pH=parseFloat(pH);
	pOH=parseFloat(pOH);
	//condition=Boolean(pOH<14 && pOH>7 && pH<7 && pH>0)
	condition=Boolean( pH<7 && pH>0)
	console.log(pH)
	console.log(pOH)
	if (condition) {
	pOH=14-pH
	OH=10**-pOH
	OH_when_have_pH="<h2>"+pOH+"14-"+pH+" </br>"+"10^-"+pH+"=<center>"+OH+"</center></h2>"
	multiple_0.innerHTML=OH_when_have_pH
	}
}
	function OH_when_have_pOH(){
	cointain()
	pOH=parseFloat(pOH);
	console.log(pOH);
	condition=Boolean(pOH<14 && pOH>7)
	if (condition) {
	OH=10**-pOH
	OH_when_have_pOH="<h2></br>"+"10^-"+pOH+"=<center>"+OH+"</center></h2>"
	multiple_0.innerHTML=OH_when_have_pOH
}
}
function  henderson_hasselbalch_ph(sal,mol,ka){//sal,Moles,ka
	cointain();

	acido="<h1> y es un acido</h1>"
	acid_or_base.innerHTML=acido;
	paso_0.innerHTML="sacar logaritmo por metodo se henderson hasselbalch ";

	exponent=parseInt(exponent);
	console.log(exponent)
	Ka=parseFloat(Ka);
	console.log(Ka)
	moles=parseFloat(moles);
	console.log(moles)
	parseFloat(sal);
	console.log(sal)
	Ka=Ka*10**(exponent)
	console.log(ka)
	henderson_hasselbalch=Ka+Math.log10(sal/mol)
	console.log("henderson_hasselbalch1",henderson_hasselbalch)
	console.log("henderson_hasselbalch",henderson_hasselbalch)
	henderson_hasselbalch_out="<h2></br>"+ka+"+log10("+sal+"/"+mol+")"+"=<center>"+henderson_hasselbalch+"</center></h2>"
	multiple_0.innerHTML=henderson_hasselbalch_out
	

}
function  henderson_hasselbalch_poh(sal,mol,ka){//sal,Moles,ka
	cointain();

	acido="<h1> y es una base</h1>"
	acid_or_base.innerHTML=acido;
	paso_0.innerHTML="sacar logaritmo por metodo se henderson hasselbalch ";

	exponent=parseInt(exponent);
	console.log(exponent)
	kb=parseFloat(kb);
	console.log(kb)
	moles=parseFloat(moles);
	console.log(moles)
	parseFloat(sal);
	console.log(sal)
	kb=kb*10**(exponent)
	console.log(kb)
	henderson_hasselbalch=kb+Math.log10(sal/mol)
	console.log("henderson_hasselbalch1",henderson_hasselbalch)
	if (henderson_hasselbalch>7) {
	console.log("henderson_hasselbalch",henderson_hasselbalch)
	henderson_hasselbalch+=
	henderson_hasselbalch_out="<h2></br>"+ka+"+log10("+sal+"/"+mol+")"+"=<center>"+henderson_hasselbalch+"</center></h2>"
	multiple_0.innerHTML=henderson_hasselbalch_out
	}
	if (henderson_hasselbalch<14) {
	console.log("henderson_hasselbalch",henderson_hasselbalch)
	henderson_hasselbalch_out="<h2></br>"+ka+"+log10("+sal+"/"+mol+")"+"=<center>"+henderson_hasselbalch+"</center></h2>"
	multiple_0.innerHTML=henderson_hasselbalch_out
	}
	else{
	henderson_hasselbalch_out="intenta con otro numero  o con Ka por que debe ser con Kb ;)"
	multiple_0.innerHTML=henderson_hasselbalch_out
	}
}