import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, StatusBar, TouchableHighlight } from "react-native"
//IMPORT DES ICONS
import Icon from "react-native-vector-icons/AntDesign";
import IconBis from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';
//IMPORT DE COMPOSANTS
import Images from "../components/Images.js"
import Carousel from 'react-native-snap-carousel';

// Récupération de la largeur de l'écran 
const w = Dimensions.get('window').width;
const { width: viewportWidth } = Dimensions.get('window');

const Recipe = ({ route }) => {

    const { THEME, isDark } = useTheme();
    //Recharge les données de l'affichage des styles
    const [shouldShow1, setShouldShow1] = useState(true);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [shouldShow3, setShouldShow3] = useState(0);
    const windowHeigth = Dimensions.get('window').heigth;
    let fullingredients = route.params.item["Ingredients"]
    let separateKeys = fullingredients.split(".");

    // tableau où chaque élement est un tableau composé de la clé en index 0, et de la description en index 1
    let ingredients = [];
    for (let i = 0; i < separateKeys.length - 1; i++) {
        ingredients.push(separateKeys[i]);
    }

    //fonctions qui modifient l'affichage en fonction du boutton cliqué
    function ingredient() {
        setShouldShow1(true)
        setShouldShow2(false)
        setShouldShow3(0)
    }

    function preparation() {
        setShouldShow1(false)
        setShouldShow2(true)
        setShouldShow3(1)
    }

    function renderImage(item) {
        return (
            <TouchableHighlight>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={Images(item["item"])} />
                </View>
            </TouchableHighlight>
        )
    }

    return (
        //crée une image en arrière plan en hauteur
        <View style={scrollview(THEME)}>
            <ScrollView contentContainerStyle={scrollview(THEME)}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <View style={styles.carouselContainer}>
                    <View style={styles.carousel}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Carousel
                                data={Object.values(route.params.item)}
                                renderItem={renderImage}
                                sliderWidth={viewportWidth}
                                itemWidth={viewportWidth}
                                inactiveSlideScale={1}
                                inactiveSlideOpacity={1}
                                firstItem={0}
                                scrollEnabled={false}
                                loop={false}
                                autoplay={false}
                                autoplayDelay={500}
                                autoplayInterval={3000}
                            //onSnapToItem={index => this.setState({ activeSlide: index })}
                            />
                        </View>
                    </View>
                    <View style={styles.infoRecipeContainer}>
                        <Text style={title_recipe(THEME)}>
                            {(route.params.item["Nom"])}
                        </Text>
                    </View>
                    <View style={styles.iconView}>
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={icon_recipe(THEME)} name="clockcircle" size={15} color={'black'} />
                            <Text style={title_icon(THEME)}> {(route.params.item["TempsTotal"])} min  </Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <IconBis style={icon_recipe(THEME)} name="star" size={40} color={'black'} />
                            <Text style={title_icon(THEME)}> {(route.params.item["Difficulte"])}  </Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                            <IconBis style={icon_recipe(THEME)} name="people-alt" size={40} color={'black'} />
                            <Text style={title_icon(THEME)}> {(route.params.item["NombreDePersonnes"])} pers  </Text>
                        </View>
                    </View>
                    <View style={container_recipe(THEME)}>
                        <View style={styles.infoContainer}>
                            <TouchableOpacity
                                onPress={() => ingredient()}
                            >
                                <Text style={shouldShow3 == 0 ? styles.textPressed : text_for_recipe(THEME)}>
                                    Ingrédients
                        </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoContainer}>
                            <TouchableOpacity
                                onPress={() => preparation()}
                            >
                                <Text style={shouldShow3 == 1 ? styles.textPressed : text_for_recipe(THEME)} >
                                    Préparation
                         </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={scrollview(THEME)}>
                    {shouldShow1 ?//vérifie quel boutton est appuyé.

                        <View style={container_text_advice(THEME)}>
                            <FlatList
                                keyExtractor={() => ingredients[0].toString()}
                                data={ingredients}
                                renderItem=
                                {
                                    ({ item }) =>
                                        <View style={{ flexDirection: "row", marginTop: 20, paddingHorizontal: 30 }}>
                                            <Octicons
                                                name={"primitive-dot"}
                                                size={18}
                                                color={THEME.TEXT_FOR_ADVICE}
                                            />
                                            <Text style={[text_for_recipe(THEME), { marginLeft: 5 }]}>{item}</Text>
                                        </View>
                                }
                            />
                        </View>
                        :
                        <View style={container_text_advice(THEME)}>
                            <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
                                <View style={styles.warning}>
                                    <Icon name="warning" style={styles.icon}></Icon>
                                    <Text style={styles.warningtxt}>Attention, afin de pouvoir entamer la recette, veuillez vous assurer que les indications de préparation ont été faites avec précaution.{"\n"}
                                    </Text>
                                </View>
                                <Text style={text_for_recipe(THEME)}>
                                    {(route.params.item["Preparation"]).split('. ').join(".\n\n")}
                                </Text>
                            </View>
                        </View>}
                </View>
            </ScrollView>
        </View>
    )
}

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE DYNAMIQUE : à partir de fonctions

function scrollview(THEME) {
    return {
        backgroundColor: THEME.SCROLLVIEW,
        justifyContent: 'space-between',
        flexGrow: 1,
    }
}

function container_text_advice(THEME) {
    return {
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginTop: 0,
        backgroundColor: THEME.SCROLLVIEW,
        borderRadius: 15,
    }
}

function title_recipe(THEME) {
    return {
        marginLeft: 5,
        fontSize: SIZE.H1_BIS,
        margin: 10,
        fontWeight: 'bold',
        color: THEME.TITLE_RECIPE,
        textAlign: 'center'
    }
}

function icon_recipe(THEME) {
    return {
        color: THEME.ICON_CATEGORY_HISTORY,
        paddingHorizontal: 20,
        fontSize: 30,
    }
}

function title_icon(THEME) {
    return {
        color: THEME.TEXT_FOR_ADVICE,
        fontSize: SIZE.ICON_H3,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        textAlign: "left",
        fontWeight: "bold",
    }
}

function container_recipe(THEME) {
    return {
        flex: 0,
        flexDirection: "row",
        height: 36,
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 10,

    }
}

function text_for_recipe(THEME) {
    return {
        color: THEME.TEXT_FOR_ADVICE,
        fontSize: SIZE.H3,
    }
}
// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({
    containerimg: {
        flex: 2,
    },
    warningtxt: {
        textAlign: 'justify',
        color: "#CA2828"
    },
    icon: {
        fontSize: 16,
        color: "#CA2828"
    },
    textPressed: {
        color: "#05944F",
        fontWeight: "bold"
    },
    warning: {
        alignItems: "center"
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.25,
        flexDirection: 'row',
        //marginBottom: 8
    },
    carouselContainer: {
    },
    carousel: {},
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: viewportWidth,
        height: Dimensions.get('window').height / 2.5
    },
    infoRecipeContainer: {
        flex: 1,
        margin: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Recipe