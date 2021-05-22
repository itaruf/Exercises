library(data.table)


pays = fread(file.choose(), fill=T,
              col.names = c("pays", "espvieF","mort_inf","activF","%chom","pnb/hb","%education","%santé")
            ,drop = c("pays","esp", "%","%")
            )
                

pays

summary(pays)

corPays = cor(pays[,c(2:8)])
corPays

library(FactoMineR)

res.pca = PCA(pays, quali.sup = c(1))
plot(res.pca, choix = "var")
plot(res.pca, choix = "ind", habillage = 1)

rownames(pays) = c("Allemagne","Autriche","Belgique","Chypre","Danemark","Espagne",
                   "Estonie","Finlande","France","Grèce","Hongrie","Irlande",
                   "Italie","Lettonie","Lituanie","Luxembourg","Malte","Norvège",
                   "Pays Bas","Pologne","Portugal","Royaume Uni","Slovaquie",
                   "Slovénie","Suède","Suisse","Tchéquie")

library(cluster)
cah=agnes(scale(pays[,2:8]),method="ward")
plot(cah, xlab="Individus",ylab="Seuil",col.axis = "red", col.lab = "red",main="Dendrogramme")

#title("Dendrogramme")

classification=as.hclust(cah)
plot(rev(classification$height),type="h",ylab="hauteurs")
classes=cutree(cah,k=4); classes

pays.classes=cbind.data.frame(pays,as.factor(classes)); pays.classes

colnames(pays.classes)[9]="Classe" 
catdes(pays.classes,num.var=9) 
