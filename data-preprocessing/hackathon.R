library(rjson)
library(tidyverse)

data<- fromJSON(file="~/Downloads/wooliesData.json")
woolies<-as.data.frame(do.call(rbind,data))
woolies<-woolies %>% separate(price, into = c('price','per'),sep = '/' )
woolies<-woolies %>% drop_na(per)
woolies$price = as.numeric(gsub("\\$", "", woolies$price))


data<- fromJSON(file="~/Downloads/colesData.json")
coles<-as.data.frame(do.call(rbind,data))
coles<-coles[- grep("NULL", coles$name),]
coles$price<-as.character(coles$price)
coles$price<-str_remove(coles$price,"[.]")

data<- fromJSON(file="~/Downloads/aldiData.json")
data<-data[-1]
aldi<-as.data.frame(do.call(rbind,data[[1]]$products))
aldi<-aldi[- grep("NA", aldi$price),]
aldi<-aldi %>% separate(price, into = c('price','per'),sep = 'per' )
aldi[is.na(aldi)] = "EA"
aldi$price = as.numeric(gsub("\\$", "", aldi$price))
aldi<-aldi %>% drop_na(price)

library(jsonlite)
x <- toJSON(woolies)
cat(x,file="woolies.json")
y <- toJSON(coles)
cat(y,file="coles.json")
z <- toJSON(aldi)
cat(z,file="aldi.json")
