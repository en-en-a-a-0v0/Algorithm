/**初始化随机数组*/
var array= new Array();
for (i=0;i<20;i++){
    array[i]=Math.ceil(Math.random()*100);
}
/**归并*/
function merging (i,j){
	var arrayTemp= new Array();
	var k=l=m=0;
	array1=i;
	array2=j;
	while (k<i.length&&l<j.length){
		if(array1[k]<array2[l]){
			arrayTemp[m++]=array1[k++];
		}else{
			arrayTemp[m++]=array2[l++];
		}	
	}
	while(k<i.length){
		arrayTemp[m++]=array1[k++];
	}
	while(l<j.length){
		arrayTemp[m++]=array2[l++];
	}
	for (m=0;m<arrayTemp.length;m++){
		array1[m]=arrayTemp[m];
	}
	return array1;
}
/**二分数组*/
function arrayDivision (i){
	if(i.length<2){
		return i;
	}
	var array1= new Array();
	var array1Length=Math.ceil(i.length/2);
	var array1Lable=array1Length-1;
	var array2= new Array();
	var array2Length=i.length-array1Length;
	var array2Lable=array2Length-1;
	for(k=0;k<=array1Lable;k++){
		array1[k]=i[k];
	}
	for(k=array1Length;k<=i.length-1;k++){
		array2[k-array1Length]=i[k];
	}
	i.length=array1Length;
	return merging(arrayDivision(array1),arrayDivision(array2));
}
/**主函数*/
function mergingSort (i){
	arrayDivision(i);
	return array1;
}
/**调用*/
mergingSort (array);