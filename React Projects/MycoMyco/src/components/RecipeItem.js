import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
//IMPORT DES DONNEES
import Images from "../components/Images.js"
//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import { SIZE } from '../components/colorThemes';

//Composant pour chaque recette appelé dans MushroomRecipe et homePage
const RecipeItem = ({ item, navigation }) => {

    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();

    return (
        <View>
            {navigation ?
                <View>
                    {/*Redirection vers la page recette*/}
                    <TouchableOpacity style={{
                        flex: 1,
                        paddingBottom: 15,
                        borderRadius: 10
                    }}
                        title="Recettes"
                        onPress={() =>
                            navigation.navigate("Recette",
                                {
                                    item: item
                                }
                            )
                        }
                    >
                        <View style={container(THEME)}>
                            <View style={{ flex: 2, }}>
                                <Image source={Images(item["Nom"])}
                                    style={{ flex: 1, width: "100%", height: "100%", resizeMode: 'cover', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                            </View>
                            <View style={{ flex: 1, padding: 5, paddingTop: 10 }}>
                                <Text style={title_recipe(THEME)}>{item["Nom"]}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
                :
                <View>
                    {/*Contenaire utilisé pour afficher les champignons dans la homePage*/}
                    <View style={{
                        flex: 1,
                        paddingBottom: 15,
                        borderRadius: 10
                    }}>
                        <View style={container(THEME)}>
                            <View style={{ flex: 2, }}>
                                <Image source={Images(item["Nom"])}
                                    style={{ flex: 1, width: "100%", height: "150%", resizeMode: 'cover', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                            </View>
                            <View style={{ flex: 1, padding: 5, paddingTop: 10 }}>
                                <Text style={title_recipe(THEME)}>{item["Nom"]}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            }
        </View>
    )
}

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/
// STYLE DYNAMIQUE : à partir de fonctions 
function container(THEME) {
    return {
        height: 180,
        width: 180,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: THEME.CONTAINER_RECIPE,
    }
}
function title_recipe(THEME) {
    return {
        color: THEME.TITLE_ICON,
        fontSize: SIZE.ICON_H3,
        alignItems: "flex-start",
        textAlign: "center",
        fontWeight: "bold",
    }
}

export default RecipeItem;