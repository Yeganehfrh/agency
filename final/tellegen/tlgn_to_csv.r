#sink("~/Desktop/tlgn.csv")

library(jsonlite)
library(nortest)

allData = fromJSON("~/Desktop/tlgn.json")

totals <- c()
numOfSubjects <- length(allData$content$answers)

for (ix in 1:length(allData$content$answers)) {
  #print(aa$content$answers[ix][[1]][3])
  total <- 0.0
  #print(aa$content$answers[ix][[1]][4])
  qs = do.call(c, list(allData$content$answers[ix][[1]][4]))
  qs1 = strsplit(qs$rows[[4]], "")
  qs2 <- list()
  qs3 <- list()
  qs4 <- list()
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
  
  for (iq in 1:length(qsa)) {
    total = total + as.numeric(qsa[[iq]])
  }
  
  total = total - 34
  if (!is.null(total) & length(total)>0) {
    if (total>20) {
      totals <- c(totals, total)
    }
  }
  
  qsa_str = paste(c(code, gender, age, contact, unlist(qsa)), collapse = ',')
  #cat(qsa_str)
  #cat('\n')
  
}

print(ad.test(totals))
#sink()
