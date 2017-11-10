#sink("~/workspace/agency/final/tellegen/tlgn.csv")

library(jsonlite)
library(nortest)
library(gtools)

allData = jsonlite::fromJSON("~/workspace/agency/final/tellegen/tlgn.json")

totals <- c()
numOfSubjects <- length(allData$content$answers)

print(numOfSubjects)

ages = c()

for (ix in 1:length(allData$content$answers)) {
  total = 0.0
  qs = do.call(c, list(allData$content$answers[ix][[1]][4]))
  qs1 = strsplit(qs$rows[[4]], "")
  qs2 = list()
  qs3 = list()
  qs4 = list()
  for (iq in 1:10) {
    qs2[iq] = qs$rows[[5]][iq]
  }
  for (iq in 1:7) {
    qs3[iq] = qs$rows[[6]][iq]
    qs4[iq] = qs$rows[[7]][iq]
  }
  qsa = c(qs1, qs2, qs3, qs4)
  code = allData$code[ix]
  gender = allData$content$answers[ix][[1]][3]$value[2]
  age = allData$content$answers[ix][[1]][3]$value[3]
  contact = allData$content$answers[ix][[1]][3]$value[8]
  
  ages = c(ages, age)
  for (iq in 1:length(qsa)) {
    total = total + as.numeric(qsa[[iq]])
  }
  
  total = total - 34
  if (!gtools::invalid(total))  {
    if (total>20) {
      totals = c(totals, total)
    }
  } else {
    qsa_str = paste(c(code, gender, age, contact, unlist(qsa)), collapse = ',')
    cat(qsa_str)
    cat('\n')    
  }
  
}
#sink()

totals = sort(totals)
percentiles = ecdf(totals)(totals)*100
ad.test(totals)
kmeans(totals, 4)
length(totals [totals>71])

print(paste('Done! n=',length(allData$content$answers)))