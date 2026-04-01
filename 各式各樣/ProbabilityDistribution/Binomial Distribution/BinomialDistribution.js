/*
小華投籃100次，每球進球率是0.2。請算出他剛好進0球的機率式子、期望值與標準差。
Probability mass function(M): 100!/(M!(100-M)!)*(0.2^M)*(0.8^(100-M))
Mean = Weighted Average = expected value(M): sigma(M=0~100){M*probability mass function(M)}
Variance: expected value((M-expected value)^2) 
          = sigma(M=0~100){((M-expected value)^2)*probability mass function(M)}
Standard Deviation: Variance^0.5
*/

/*Me and Gemini: 用Javascript寫出一個算出N偕乘的函數*/
function Factorial(n) {
  // 基礎條件：0! 和 1! 都是 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // 遞迴呼叫
  return n * Factorial(n - 1);
}

/*Me : 用javascript寫出排列組合P函數*/
/*排列（Permutation，符號 P）是指從相異元素中取出元素，並考慮順序的排成一列的方法數。*/
function P(N,M) {
  return Factorial(N)/Factorial(N-M);
  /*P(5,2)=5*4*/
}

/*Me : 用javascript寫出排列組合C函數*/
/*組合 (Combination，符號 C) 是指從相異元素中取出元素，不考慮順序的排成一列的方法數。*/
function C(N,M) {
  return P(N,M)/Factorial(M);
  /*C(5,2)=(5*4)/(2!)*/
}

function BinomialDistributionProbabilityMassFunction(Total,Success,Failed,M){
    return C(Total,M)*(Success**M)*(Failed**(Total-M));
}

function BinomialDistributionExpectedValue(Total,Success,Failed,Start,End){
    let sum=0;
	for(let i=Start;i<=End;i++){
	    sum+=i*BinomialDistributionProbabilityMassFunction(Total,Success,Failed,i);
	}
    return sum;
}

function BinomialDistributionVariance(Total,Success,Failed,Start,End){
    let ExpectedValue = BinomialDistributionExpectedValue(Total,Success,Failed,Start,End); 
    let sum=0;
	let P=0;
	for(let i=Start;i<=End;i++){
	    P = BinomialDistributionProbabilityMassFunction(Total,Success,Failed,i);
	    sum+=((i-ExpectedValue)**2)*P;
	}
    return sum;
}

function BinomialDistributionStandardDeviation(Total,Success,Failed,Start,End){
    return BinomialDistributionVariance(Total,Success,Failed,Start,End)**0.5
}

/*
BinomialDistributionExpectedValue(100,0.2,0.8,0,100): 20
BinomialDistributionVariance(100,0.2,0.8,0,100): 16
BinomialDistributionStandardDeviation(100,0.2,0.8,0,100): 4
*/