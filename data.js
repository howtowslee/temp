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

var doc02 = {
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

var doc02Sub = {
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

var doc03 = {
  row06:{
    comBizNo: "101-01-01010",
    comName: "국제상사테스트",
    comCeo: "김국세",
    comAddress: "종로구 종로2가 xxx",
    tranStart: new Date(),
    tranEnd: new Date(),
    rptGenDate: new Date(),
  },
  row08:{
    outcomCountSum: 3,
    billCountSum: 2,
    supplySum: padAdd(10000000),
    taxTermRange:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
      juminNoDeleveryBillCount: 5,
      juminNoDeleveryCount: 6,
      juminNoDeleverySupply: padAdd(130000000),
      outcomCount: 10,
      billCount: 12,
      supplySum: padAdd(130000000)
    },
    etc:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
      juminNoDeleveryBillCount: 5,
      juminNoDeleveryCount: 6,
      juminNoDeleverySupply: padAdd(130000000),
      outcomCount: 13,
      billCount: 14,
      supplySum: padAdd(130000000)
    }
  },
  row10:{
    list:[
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 10,
        billCount: 12,
        supplySum: padAdd(130000000)
      },
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 11,
        billCount: 12,
        supplySum: padAdd(130000000)
      }
    ]
  },
  row12:{
    manageNum: "123-123"
  }
}

var doc03Sub = {
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
  row08:{
    manageNum: "123-1234"
  }
}

var doc08 = {
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

var doc08Sub = {
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

var doc09 = {
  row06:{
    comBizNo: "101-01-01010",
    comName: "국제상사테스트",
    comCeo: "김국세",
    comAddress: "종로구 종로2가 xxx",
    tranStart: new Date(),
    tranEnd: new Date(),
    rptGenDate: new Date(),
  },
  row08:{
    outcomCountSum: 3,
    billCountSum: 2,
    supplySum: padAdd(10000000),
    taxTermRange:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
    },
    etc:{
      bizNoDeleveryComCount: 3,
      bizNoDeleveryBillCount: 4,
      bizNoDeleverySupply: padAdd(130000000),
    }
  },
  row10:{
    list:[
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 10,
        billCount: 12,
        supplySum: padAdd(130000000)
      },
      {
        comBizNo: "101-01-01010",
        comName: "국제상사테스트",
        outcomCount: 11,
        billCount: 12,
        supplySum: padAdd(130000000)
      }
    ]
  },
  row12:{
    manageNum: "123-1234"
  }
}

var doc09Sub = {
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
  row08:{
    manageNum: "123-1234"
  }
}

var doc10 = {
  row05:{
    registNumber: 010110,
    registDate: new Date(),
  },
  row07:{
    comName: "국제상사테스트",
    comBizNo: "101-01-01010",
    comBizStatus: "도매",
    comBizEvent: "가전제품"
  },
  row09:{
    FaSum:{
      count: 1,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    FaBld:{
      count: 2,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    FaFac:{
      count: 3,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    FaWheel:{
      count: 4,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    FaEtcdep:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    }
  },
  row11:{
    registDate: new Date()
  },
  row12:{
    comCeo: "김국세"
  },
  row13:{
    location: "종로"
  }
}

var doc11 = {
  row06:{
    comName: "국제상사테스트",
    comCeo: "김국세",
    comBizNo: "101-01-01010",
  },
  row08:{
    CardSum:{
      count: 1,
      supply: 10000000,
      vat: 123123,
    },
    CardCashBill:{
      count: 2,
      supply: 10000000,
      vat: 123123,
    },
    CardFac:{
      count: 3,
      supply: 10000000,
      vat: 123123,
    },
    CardWheel:{
      count: 4,
      supply: 10000000,
      vat: 123123,
    },
    CardEtcdep:{
      count: 5,
      supply: 10000000,
      vat: 123123,
    }
  },
  row10:{
    list:[
      {
        cdMemberDiv:"1258-8547-8965-6745",
        franchComBizNo:"102-02-34567",
        tranCount: 5,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"2258-8547-8965-6745",
        franchComBizNo:"202-02-34567",
        tranCount: 6,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"3258-8547-8965-6745",
        franchComBizNo:"302-02-34567",
        tranCount: 7,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"4258-8547-8965-6745",
        franchComBizNo:"402-02-34567",
        tranCount: 8,
        supplyAmount: 250000,
        vatAmount: 25000
      },
    ]
  },
  row11:{
    registDate: new Date()
  },
  row12:{
    comCeo: "김국세"
  },
  row13:{
    location: "종로"
  }
}

var doc11Sub = {
  row04:{
    comBizNo: "101-01-01010",
  },
  row08:{
    CardSum:{
      count: 1,
      supply: 10000000,
      vat: 123123,
    },
    CardCashBill:{
      count: 2,
      supply: 10000000,
      vat: 123123,
    },
    CardFac:{
      count: 3,
      supply: 10000000,
      vat: 123123,
    },
    CardWheel:{
      count: 4,
      supply: 10000000,
      vat: 123123,
    },
    CardEtcdep:{
      count: 5,
      supply: 10000000,
      vat: 123123,
    }
  },
  row06:{
    list:[
      {
        cdMemberDiv:"1258-8547-8965-6745",
        franchComBizNo:"102-02-34567",
        tranCount: 5,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"2258-8547-8965-6745",
        franchComBizNo:"202-02-34567",
        tranCount: 6,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"3258-8547-8965-6745",
        franchComBizNo:"302-02-34567",
        tranCount: 7,
        supplyAmount: 250000,
        vatAmount: 25000
      },
      {
        cdMemberDiv:"4258-8547-8965-6745",
        franchComBizNo:"402-02-34567",
        tranCount: 8,
        supplyAmount: 250000,
        vatAmount: 25000
      },
    ]
  },
}

var doc17 = {
  row06:{
    comName: "국제상사테스트",
    comCeo: "김국세",
    comBizNo: "101-01-01010",
  },
  row08:{
    section01:{
      count: 1,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section02:{
      count: 2,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section03:{
      count: 3,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section04:{
      count: 4,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section05:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section06:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section07:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section08:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
    section09:{
      count: 5,
      supply: 10000000,
      vat: 123123,
      note: "test"
    },
  },
  row10:{
    list:[
      { 
        supply: 100000,
        vat: 100000,
        cominDivSupplySum: 100000,
        cominDivSupplyVat: 100000,
        ndinDivSupplyVat: 100000,
      },
      { 
        supply: 100000,
        vat: 100000,
        cominDivSupplySum: 100000,
        cominDivSupplyVat: 100000,
        ndinDivSupplyVat: 100000,
      },
      { 
        supply: 100000,
        vat: 100000,
        cominDivSupplySum: 100000,
        cominDivSupplyVat: 100000,
        ndinDivSupplyVat: 100000,
      },
    ],
    listSum:{ 
      supply: 100000,
      vat: 100000,
      cominDivSupplySum: 100000,
      cominDivSupplyVat: 100000,
      ndinDivSupplyVat: 100000,
    },
  },
  row12:{
    list:[
      {
        incomVat: 1000000,
        except: 1000000,
        ndinVatCal: 1000000,
        yndinVatCal: 1000000,
        addedVatCal: 1000000
      }
    ],
    listSum:{
      incomVat: 1000000,
      except: 1000000,
      ndinVatCal: 1000000,
      yndinVatCal: 1000000,
      addedVatCal: 1000000
    }
  },
  row14:{
    list:[
      {
        billVat: 1000000,
        cutRate: 10,
        billSupplyRate: 10,
        addedVatCal: 1000000
      }
    ],
    listSum:{
      billVat: 1000000,
      cutRate: 10,
      billSupplyRate: 10,
      addedVatCal: 1000000
    }
  }
}


var doc18 = {
  row06:{
    comName: "국제상사테스트",
    comCeo: "김국세",
    comAddress: "종로구 종로2가 xxx",
    comBizNo: "101-01-01010",
  },
  row08:{
    sum:{
      allSumIncom: 1000000,
      cdIncom: 100000,
      cashBillIncom: 100000
    },
    add:{
      allSumIncom: 1000000,
      cdIncom: 100000,
      cashBillIncom: 100000
    },
    notax:{
      allSumIncom: 1000000,
      cdIncom: 100000,
      cashBillIncom: 100000
    },
    serve:{
      allSumIncom: 1000000,
      cdIncom: 100000,
      cashBillIncom: 100000
    },
  },
  row10:{
    tax: 100000,
    sumIncom: 100000
  }
}

var doc01 = {
  row06:{
    comName: "국제상사테스트",
    comCeo: "김국세",
    ceoBirth: new Date(),
    name: "test",
    phone: "010-1234-5678",
    address: "test",
    comBizNo: "101-01-01010",
    cellPhone: "010-1234-5678",
    comAddress: "종로구 종로2가 xxx",
    email: "test@test.com",
  },
  row08:{
    billOut:{
      amount:"billOut.amount",
      vat:"billOut.vat"
    },
    billOutRe:{
      amount:"billOutRe.amount",
      vat:"billOutRe.vat"
    },
    cdCash:{
      amount:"cdCash.amount",
      vat:"cdCash.vat"
    },
    etcOut:{
      amount:"cdCash.amount",
      vat:"cdCash.vat"
    },
    billOutSm:{
      amount:"cdCash.amount",
      vat:"cdCash.vat"
    },
    etcOutSm:{
      amount:"cdCash.amount",
      vat:"cdCash.vat"
    },
    billOutDrop:{
      amount:"billOutDrop.amount",
      rate:"billOutDrop.rate",
      vat:"billOutDrop.vat"
    },
    outDeptVat:{
      amount:"outDeptVat.amount",
      rate:"outDeptVat.rate",
      vat:"outDeptVat.vat"
    },
    sum:{
      standardVatAmount: "standardVatAmount.sum",
      calVat:"calVat.sum"
    }    
  },
  row09:{
    billInGet:{
      amount:"billInGet.amount",
      rate:"billInGet.rate",
      vat:"billInGet.vat"
    },
    export:{
      rate:"export.rate",
      vat:"export.vat"
    },
    billInGetFix:{
      amount:"billInGetFix.amount",
      rate:"billInGetFix.rate",
      vat:"billInGetFix.vat"
    },
    billInDrop:{
      amount:"billInDrop.amount",
      rate:"billInDrop.rate",
      vat:"billInDrop.vat"
    },
    billInRe:{
      amount:"billInRe.amount",
      rate:"billInRe.rate",
      vat:"billInRe.vat"
    },
    etcDedDe:{
      amount:"etcDedDe.amount",
      rate:"etcDedDe.rate",
      vat:"etcDedDe.vat"
    },
    sum:{
      amount:"sum.amount",
      rate:"sum.rate",
      vat:"sum.vat"
    },
    inNoded:{
      amount:"inNoded.amount",
      rate:"inNoded.rate",
      vat:"inNoded.vat"
    },
    plusMinus:{
      amount:"plusMinus.amount",
      vat:"plusMinus.vat"
    }
  },
  row10:{
    paidVat:"paidVat"
  },
  row11:{
    etcDed:{
      rate:"etcDed.rate",
      vat:"etcDed.vat"
    },
    cdIncome:{
      amount:"cdIncome.amount",
      rate:"cdIncome.rate",
      vat:"cdIncome.vat"
    },
    dedSum:{
      amount:"dedSum.amount",
      vat:"dedSum.vat"
    },
    yetReturn:{
      amount:"yetReturn.amount",
      vat:"yetReturn.vat"
    },
    assined:{
      amount:"assined.amount",
      vat:"assined.vat"
    },
    mnaPaidVat:"mnaPaidVat",
    mnaSpaidVat:"mnaSpaidVat",
    added:{
      amount:"added.amount",
      vat:"added.vat"
    },
    plusMinusVat:"plusMinusVat",
    totalPayVat:"totalPayVat"
  },
  row12:{
    account:"account"
  },
  row13:{
    bizCloseDate:"bizCloseDate",
    bizcloseReason:"bizcloseReason"
  },
  row14:{
    data27:{
      comBizEvent:"data27.comBizEvent",
      production:"data27.production",
      comBizTypeCode:"data27.comBizTypeCode",
      amount:"data27.amount"
    },
    data28:{
      comBizEvent:"data28.comBizEvent",
      production:"data28.production",
      comBizTypeCode:"data28.comBizTypeCode",
      amount:"data28.amount"
    },
    data29:{
      comBizEvent:"data29.comBizEvent",
      production:"data29.production",
      comBizTypeCode:"data29.comBizTypeCode",
      amount:"data29.amount"
    },
    data30:{
      comBizEvent:"data30.comBizEvent",
      production:"data30.production",
      comBizTypeCode:"data30.comBizTypeCode",
      amount:"data30.amount"
    },
    sum:{
      comBizEvent:"sum.comBizEvent",
      production:"sum.production",
      comBizTypeCode:"sum.comBizTypeCode",
      amount:"sum.amount"
    },
    registDate:"registDate",
    registUser:"registUser",
    agent:"agent"
  },
  row15:{
    agent:"agent",
    comBizNo:"comBizNo",
    phone:"phone"
  },
  row19:{
    comBizNo:"comBizNo"
  },
  row20:{
    billOut:{
      amount:"billOut.amount",
      vat:"billOut.vat"
    },
    billOutEtc:{
      amount:"billOutEtc.amount",
      vat:"billOutEtc.vat"
    },
    billOutSm:{
      amount:"billOutSm.amount",
      vat:"billOutSm.vat"
    },
    billOutSmEtc:{
      amount:"billOutSmEtc.amount",
      vat:"billOutSmEtc.vat"
    },
    outDropSum:{
      amount:"outDropSum.amount",
      rate:"outDropSum.rate",
      vat:"outDropSum.vat"
    },
    billIn:{
      amount:"billIn.amount",
      rate:"billIn.rate",
      vat:"billIn.vat"
    },
    etcDedDe:{
      amount:"etcDedDe.amount",
      rate:"etcDedDe.rate",
      vat:"etcDedDe.vat"
    },
    billInSum:{
      amount:"billInSum.amount",
      rate:"billInSum.rate",
      vat:"billInSum.vat"
    }
  },
  row21:{
    normalBuy:{
      amount:"normalBuy.amount",
      rate:"normalBuy.rate",
      vat:"normalBuy.vat"
    },
    fixBuy:{
      amount:"fixBuy.amount",
      rate:"fixBuy.rate",
      vat:"fixBuy.vat"
    },
    dedInputTax:{
      amount:"dedInputTax.amount",
      vat:"dedInputTax.vat"
    },
    recycleDedInputTax:{
      amount:"recycleDedInputTax.amount",
      vat:"recycleDedInputTax.vat"
    },
    businessChangeTax:{
      amount:"businessChangeTax.amount",
      rate:"businessChangeTax.rate",
      vat:"businessChangeTax.vat"
    },
    inventoryTax:{
      amount:"inventoryTax.amount",
      rate:"inventoryTax.rate",
      vat:"inventoryTax.vat"
    },
    repaymentTax:{
      amount:"repaymentTax.amount",
      rate:"repaymentTax.rate",
      vat:"repaymentTax.vat"
    },
    foreignTax:{
      amount:"foreignTax.amount",
      rate:"foreignTax.rate",
      vat:"foreignTax.vat"
    },
    sum:{
      amount:"sum.amount",
      rate:"sum.rate",
      vat:"sum.vat"
    }

  },
  row22:{
    inNoDed:{
      amount:"inNoDed.amount",
      rate:"inNoDed.rate",
      vat:"inNoDed.vat"
    },
    comInTaxCut:{
      amount:"comInTaxCut.amount",
      rate:"comInTaxCut.rate",
      vat:"comInTaxCut.vat"
    },
    deptNoDed:{
      amount:"deptNoDed.amount",
      rate:"deptNoDed.rate",
      vat:"deptNoDed.vat"
    },
    inNoDedSum:{
      amount:"inNoDedSum.amount",
      rate:"inNoDedSum.rate",
      vat:"inNoDedSum.vat"
    }
  },
  row23:{
    eleReport:{
      amount:"eleReport.amount",
      rate:"eleReport.rate",
      vat:"eleReport.vat"
    },
    eleTaxStatement:{
      amount:"eleTaxStatement.amount",
      rate:"eleTaxStatement.rate",
      vat:"eleTaxStatement.vat"
    },
    taxi:{
      amount:"taxi.amount",
      rate:"taxi.rate",
      vat:"taxi.vat"
    },
    cashReceipt:{
      amount:"cashReceipt.amount",
      rate:"cashReceipt.rate",
      vat:"cashReceipt.vat"
    },
    etc:{
      amount:"etc.amount",
      rate:"etc.rate",
      vat:"etc.vat"
    },
    sum:{
      amount:"sum.amount",
      rate:"sum.rate",
      vat:"sum.vat"
    }
  },
  row24:{
    noRegist:{
      amount:"noRegist.amount",
      vat:"noRegist.vat"
    },
    taxDelayIssue:{
      amount:"taxDelayIssue.amount",
      vat:"taxDelayIssue.vat"
    },
    taxDelayTake:{
      amount:"taxDelayTake.amount",
      vat:"taxDelayTake.vat"
    },
    taxNoIssue:{
      amount:"taxNoIssue.amount",
      vat:"taxNoIssue.vat"
    },
    eleTaxDelaySend:{
      amount:"eleTaxDelaySend.amount",
      vat:"eleTaxDelaySend.vat"
    },
    eleTaxNoSend:{
      amount:"eleTaxNoSend.amount",
      vat:"eleTaxNoSend.vat"
    },
    taxSumBadSubmit:{
      amount:"taxSumBadSubmit.amount",
      vat:"taxSumBadSubmit.vat"
    },
    taxSumDelaySubmit:{
      amount:"taxSumDelaySubmit.amount",
      vat:"taxSumDelaySubmit.vat"
    },
    noReportNormal:{
      amount:"noReportNormal.amount",
      vat:"noReportNormal.vat"
    },
    noReportUnfair:{
      amount:"noReportUnfair.amount",
      vat:"noReportUnfair.vat"
    },
    overReportNormal:{
      amount:"overReportNormal.amount",
      vat:"overReportNormal.vat"
    },
    overReportUnfaire:{
      amount:"overReportUnfaire.amount",
      vat:"overReportUnfaire.vat"
    },
    badPay:{
      amount:"badPay.amount",
      vat:"badPay.vat"
    },
    badZeroTaxReport:{
      amount:"badZeroTaxReport.amount",
      vat:"badZeroTaxReport.vat"
    },
    badCashSalesReport:{
      amount:"badCashSalesReport.amount",
      vat:"badCashSalesReport.vat"
    },
    badRealEstate:{
      amount:"badRealEstate.amount",
      vat:"badRealEstate.vat"
    },
    MnaSpaidNoAccount:{
      amount:"MnaSpaidNoAccount.amount",
      vat:"MnaSpaidNoAccount.vat"
    },
    MnaSpaidDelay:{
      amount:"MnaSpaidDelay.amount",
      vat:"MnaSpaidDelay.vat"
    },
    sum:{
      amount:"sum.amount",
      rate:"sum.rate",
      vat:"sum.vat"
    }
  },
  row25:{
    data78:{
      comBizStatus:"data78.comBizStatus",
      comBizEvent:"data78.comBizEvent",
      comBizTypeCode:"data78.comBizTypeCode",
      amount:"data78.amount"
    },
    data79:{
      comBizStatus:"data79.comBizStatus",
      comBizEvent:"data79.comBizEvent",
      comBizTypeCode:"data79.comBizTypeCode",
      amount:"data79.amount"
    },
    data80:{
      comBizStatus:"data80.comBizStatus",
      comBizEvent:"data80.comBizEvent",
      comBizTypeCode:"data80.comBizTypeCode",
      amount:"data80.amount"
    },
    data81:{
      comBizStatus:"data81.comBizStatus",
      comBizEvent:"data81.comBizEvent",
      amount:"data81.amount"
    }
  },
  row26:{
    billIssueAmount:"billIssueAmount",
    billTakeAmount:"billTakeAmount"
  }

}

var payroll01 = {
  row02:{
    napensStat: "row02.napensStat",
    heinsuStat: "row02.heinsuStat",
    ueinsuStat: "row02.ueinsuStat",
    indisinsrStat: "row02.indisinsrStat"
  },
  row04:{
    today: "row04.today"
  },
  row05: {
    mngNo: "row05.mngNo",
    cmpName: "row05.cmpName",
    unitCmpName: "row05.unitCmpName",
    cmpOfficeName: "row05.cmpOfficeName",
    bizpAddr: "row05.bizpAddr",
    bizpAddrDtl: "row05.bizpAddrDtl",
    zipCode: "row05.zipCode",
    telNo: "row05.telNo",
    fax: "row05.fax"
  },
  row06:{
    agencyNo: "row06.agencyNo",
    agencyName: "row06.agencyName",
    agencyManageNo: "row06.agencyManageNo",
  },
  row07: {
    list: [
      {
        userName: 'row07.userName',
        natny: 'row07.natny',
        bsnmregRpstYn: 'row07.bsnmregRpstYn',
        monAvgPay: 'row07.monAvgPay',
        napensAcquDt:'row07.napensAcquDt',
    
        napensStat : 'row07.napensStat',
        pmntMethod: 'row07.pmntMethod',
        heinsuStat : 'row07.heinsuStat',
        ueinsuStat : 'row07.ueinsuStat',
        indisinsrStat : 'row07.indisinsrStat',
        
        ssn: 'row07.ssn',
        stayQalf: 'row07.stayQalf',
        napensAcquCode:'row07.napensAcquCode',
        heinsuAcquCode:'row07.heinsuAcquCode',
        jobfunCl02:'row07.jobfunCl02',
      },
      {
        userName: 'row07.userName',
        natny: 'row07.natny',
        bsnmregRpstYn: 'row07.bsnmregRpstYn',
        monAvgPay: 'row07.monAvgPay',
        napensAcquDt:'row07.napensAcquDt',
    
        napensStat : 'row07.napensStat',
        pmntMethod: 'row07.pmntMethod',
        heinsuStat : 'row07.heinsuStat',
        ueinsuStat : 'row07.ueinsuStat',
        indisinsrStat : 'row07.indisinsrStat',
        
        ssn: 'row07.ssn',
        stayQalf: 'row07.stayQalf',
        napensAcquCode:'row07.napensAcquCode',
        heinsuAcquCode:'row07.heinsuAcquCode',
        jobfunCl02:'row07.jobfunCl02',
      },
    ],
  },
  row09: {
    year: "row09.year",
    month: "row09.month",
    date: "row09.date",
  },
  row10: {
    submitUser: "row10.submitUser",
    agency: "row10.agency",
  },
  row21: {
    relCode: 'row21.relCode',
    suptFamName: 'row21.suptFamName',
    ssn: 'row21.ssn',
    stayQalf: 'row21.stayQalf',
    stayStartDt: 'row21.stayStartDt',
    stayEndDt: 'row21.stayEndDt',
  },
  row23: {
    year: "row23.year",
    month: "row23.month",
    date: "row23.date"
  },
  row24: {
    submitUser:"row24.submitUser"
  }
  
}

var payroll02 = {
  row02:{
    napensStat: "row02.napensStat",
    heinsuStat: "row02.heinsuStat",
    ueinsuStat: "row02.ueinsuStat",
    indisinsrStat: "row02.indisinsrStat"
  },
  row04: {
    today: "row04.today"
  },
  row05: {
    mngNo: "row05.mngNo",
    cmpName: "row05.cmpName",
    telNo: "row05.telNo",
    fax: "row05.fax",
    bizpAddr: "row05.bizpAddr",
    bizpAddrDtl: "row05.bizpAddrDtl",
    zipCode: "row05.zipCode",
  },
  row06:{
    agencyNo: "row06.agencyNo",
    agencyName: "row06.agencyName",
    agencyManageNo: "row06.agencyManageNo",
  },
  row07:{
    list: [
      {
        name: "row07.name",
        ssn: "row07.ssn",
        telNo: "row07.telNo",
        losDt: "row07.losDt",
        napensLostCode: "row07.napensLostCode",
        heinsuLostCode: "row07.heinsuLostCode",
        thsyrRemta: "row07.thsyrRemta",
        bfyrRemta: "row07.bfyrRemta",
        calcPay: "row07.calcPay",
        lfempRsn: "row07.lfempRsn",
      },
      {
        name: "row07.name",
        ssn: "row07.ssn",
        telNo: "row07.telNo",
        losDt: "row07.losDt",
        napensLostCode: "row07.napensLostCode",
        heinsuLostCode: "row07.heinsuLostCode",
        thsyrRemta: "row07.thsyrRemta",
        bfyrRemta: "row07.bfyrRemta",
        calcPay: "row07.calcPay",
        lfempRsn: "row07.lfempRsn",
      }
    ]
  },
  row09: {
    year: 'row09.year',
    month: 'row09.month',
    date: 'row09.date',
  },
  row10: {
    submitUser: "row10.submitUser",
    agency: "row10.agency",
  },
}

var payroll03 = {
  row02: {
    comName: "row02.comName",
    owner: "row02.owner",
  },
  row03: {
    startYear: "row03.startYear",  
    startMonth: "row03.startMonth",  
    startDate: "row03.startDate",  
    dylrrStartYear: "row03.startYear",  
    dylrrStartMonth: "row03.startMonth",  
    dylrrStartDate: "row03.startDate",  
    dylrrEndYear: "row03.EndYear",  
    dylrrEndMonth: "row03.EndMonth",  
    dylrrEndDate: "row03.EndDate"
  },
  row04: {
    office: "row04.office"
  },
  row05: {
    workDetail: "row05.workDetail"
  },
  row06: {
    workStart: "row06.workStart",
    workEnd: "row06.workEnd",
    restStart: "row06.restStart",
    restEnd: "row06.restEnd",
  },
  row08: {
    wage: "row08.wage",
    bonus: "row08.bonus",
    extra: "row08.extra",
    wageDate: "row08.wageDate",
    paymentWay: "row08.paymentWay",
  },
  row10: {
    napensStat: "row10.napensStat",
    heinsuStat: "row10.heinsuStat",
    ueinsuStat: "row10.ueinsuStat",
    indisinsrStat: "row10.indisinsrStat"
  },
  row13: {
    joinYear: "row13.joinYear",
    joinMonth: "row13.joinMonth",
    joinDate: "row13.joinDate",
  },
  row14: {
    ownerComName: "row14.ownerComName",
    ownerAddress: "row14.ownerAddress",
    ownerName: "row14.ownerName",
    employeeAddress: "row14.employeeAddress",
    employeePhone: "row14.employeePhone",
    employeeName: "row14.employeeName",
  },

}

doc02.row12.left = leftList(doc02.row12.list, 4);
doc02Sub.row05.left = leftList(doc02Sub.row05.list, 15);
doc03.row10.left = leftList(doc03.row10.list, 4);
doc03Sub.row05.left = leftList(doc03Sub.row05.list, 15);
doc08.row12.left = leftList(doc08.row12.list, 4);
doc08Sub.row05.left = leftList(doc08Sub.row05.list, 15);
doc09.row10.left = leftList(doc09.row10.list, 4);
doc09Sub.row05.left = leftList(doc09Sub.row05.list, 15);
doc11.row10.left = leftList(doc11.row10.list, 15);
doc11Sub.row06.left = leftList(doc11Sub.row06.list, 26);
doc17.row10.left = leftList(doc17.row10.list, 5);
doc17.row12.left = leftList(doc17.row12.list, 2);
doc17.row14.left = leftList(doc17.row14.list, 2);

payroll01.row07.left = leftList(payroll01.row07.list, 4);
payroll02.row07.left = leftList(payroll02.row07.list, 8);

module.exports = {
  doc01,
  doc02,
  doc02Sub,
  doc03,
  doc03Sub,
  doc08,
  doc08Sub,
  doc09,
  doc09Sub,
  doc10,
  doc11,
  doc11Sub,
  doc17,
  doc18,
  payroll01,
  payroll02,
  payroll03,
}

