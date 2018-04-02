var fs = require('fs');
var htmlPdf = require('html-pdf-chrome');
var htmlTemplate = require('angular-template');
var path = "doc08.html";
var options = {
  prefix: 'ng'
}

var name = 'doc08';
var inputObj;

if (process.argv.length == 3) {
  name = process.argv[2];
}

var padAdd = function(num){
  var numString = num.toString();
  return numString.padStart(15);
}

var leftList = function(arr, max){
  var tempArr = [];
  if(arr.length >= max){
    return tempArr;
  }
  var count = max - arr.length;
  for(var i=arr.length+1; i<=max; i++){
    tempArr.push(i)
  }
  return tempArr;
}

var doc2Obj = {
  row03:{
    textTerm: "",
    year: "2017",
    quarter: "1",
    startMonth: "1",
    startDate: "1",
    endMonth: "6",
    endDate: "30",
  },
  row06:{
    comBizNo: "101-01-01010",
    comName: "국제상사테스트",
    comCeo: "김국세",
    comAddress: "종로구 종로2가 xxx",
    tranStart: new Date(),
    tranEnd: new Date(),
    rptGenDate: new Date(),
  },
  row09:{
    outcomCountSum: 3,
    billCountSum: 2,
    supplySum: padAdd(10000000),
    vatSum: padAdd(100000000),
    taxTermRange:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
      bizNoDeleveryVat: padAdd(13000000),
      juminNoDeleveryBillCount: 5,
      juminNoDeleveryCount: 6,
      juminNoDeleverySupply: padAdd(130000000),
      juminNoDeleveryVat: padAdd(13000000),
      outcomCount: 10,
      billCount: 12,
      supplySum: padAdd(130000000),
      vatSum: padAdd(13000000)
    },
    etc:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
      bizNoDeleveryVat: padAdd(13000000),
      juminNoDeleveryBillCount: 5,
      juminNoDeleveryCount: 6,
      juminNoDeleverySupply: padAdd(130000000),
      juminNoDeleveryVat: padAdd(13000000),
      outcomCount: 13,
      billCount: 14,
      supplySum: padAdd(130000000),
      vatSum: padAdd(13000000)
    }
  },
  row12:{
    list:[
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 10,
        billCount: 12,
        supplySum: padAdd(130000000),
        vatSum: padAdd(13000000)
      },
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 11,
        billCount: 12,
        supplySum: padAdd(130000000),
        vatSum: padAdd(13000000)
      }
    ]
  },
  row13:{
    manageNum: "123-123"
  }
}

var doc2ObjSub = {
  row04:{
    comBizNo: "123-45-67890"
  },
  row05:{
    list:[
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 10,
        billCount: 12,
        supplySum: padAdd(130000000),
        vatSum: padAdd(13000000)
      },
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 11,
        billCount: 12,
        supplySum: padAdd(130000000),
        vatSum: padAdd(13000000)
      }
    ]
  },
  row09:{
    manageNum: "123-1234"
  }
}

switch (name) {
  case "doc02":
    doc2Obj.row12.left = leftList(doc2Obj.row12.list, 4);
    inputObj = doc2Obj
    break;
  case "doc02-sub":
    doc2ObjSub.row05.left = leftList(doc2ObjSub.row05.list, 15);
    inputObj = doc2ObjSub
    break;

  default:
    break;
}

var dataHtml = htmlTemplate('./'+name+'.html', inputObj, options);
fs.writeFileSync('./'+name+'data.html', dataHtml);

var html = fs.readFileSync('./'+name+'data.html', 'utf8');
var commonStyle = fs.readFileSync('./style.css');
var docStyle = fs.readFileSync('./'+name+'.css');
  
html = html.replace('<!--commonStyleHere-->', '<style>'+ commonStyle + '</style>');
html = html.replace('<!--docStyleHere-->',  '<style>'+ docStyle + '</style>');

// fs.writeFileSync('./result.html', html);
htmlPdf.create(html, {
  printOptions: {
    printBackground: true,
    scale: 0.2,
    marginBottom: 0,
    marginTop: 0
  }
})
.then((res) => res.toFile(name+'.pdf'))