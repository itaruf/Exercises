//IMPORTS FRAMEWORKS
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, Dimensions } from 'react-native';

//IMPORT DES ICONS
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

//IMPORTS RELATIFS AU STYLE
import { useTheme } from '../../ThemeProvider';
import ItemSeparatorView from '../components/ItemSeparatorView'
import { SIZE } from '../components/colorThemes';

//IMPORT DE COMPOSANTS
import Images from "../components/Images.js"

const KeyItem = ({ item, navigation }) => {

    // Etat, détermination du mode d'éclairage actuel
    const { THEME, isDark } = useTheme();
    // Etat d'affichage de la fenêtre contenant les informations d'une clé
    const [showWarning, SetshowWarning] = useState(false);
    const [isModalVisible, setModalVisible] = useState(true);
    // Détermination des dimensions de l'écran
    const window = Dimensions.get('window');
    const screenHeight = window.height;
    const screenWidth = window.width;

    // Fonction qui va permettre d'afficher un bouton qui au clic fera apparaître une fenêtre contenant les informations relatives à une clé
    function showButtonDescription(item) {
        return (
            <View>
                <Modal
                    visible={showWarning}
                    transparent={true}
                    statusBarTranslucent
                    backdropOpacity={0.3}
                    onBackdropPress={() => setModalVisible(false)
                    }
                >
                    <View style={centered_view_Alert(THEME)}>
                        <View style={alert_modal(THEME, screenHeight, screenWidth)}>
                            <View style={styles.alert_body}>
                                <Text style={title_modal(THEME)}>Information{"\n"}</Text>
                                <Text style={text_modal(THEME)}>{item["Description"]}</Text>
                            </View>
                            <Pressable style={{ flexDirection: "row-reverse", alignItems: 'flex-end' }}
                                onPress={() => SetshowWarning(false)}
                            >
                                <Text style={ok(THEME)}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => SetshowWarning(true)} >
                    <FontAwesome5 style={information_button(THEME)} name={"info-circle"} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            {/* ---------------------------------- Affichage des éléments d'information (nom, image, etc) d'une clé ----------------------- */}
            <View style={container(THEME)}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={Images(item["Nom"])} />
                </View>
                <View style={styles.contents}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.header}>
                            <Text numberOfLines={9} style={titleKey(THEME)}>{item["Nom"]}{"\n"}{"\n"}
                                <Text numberOfLines={9} style={key_subdescribe(THEME)}>{item["Description"]}</Text>
                            </Text>
                        </View>
                    </View>

                </View>
                {item["Description"] ?
                    showButtonDescription(item)
                    : null}

            </View>
            {ItemSeparatorView()}
        </View >
    )
}

export default KeyItem;

/****************************STYLES APPLIQUES SUR LA PAGE*********************************/

// STYLE DYNAMIQUE : à partir de fonctions
function container(THEME) {
    return {
        flexDirection: 'row',
        backgroundColor: THEME.CONTAINER_HP,
        borderRadius: 10,
        borderColor: THEME.CONTAINER_BORDER,
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        marginTop: 8
    }
}

function titleKey(THEME) {
    return {
        color: THEME.TITLE_KEY,
        fontSize: SIZE.H2,
        paddingHorizontal: 20,
        paddingRight: 10,
        textAlign: "left",
        fontWeight: "bold"
    }
}

function key_subdescribe(THEME) {
    return {
        color: THEME.KEY_SUBDESCRIBE,
        fontSize: SIZE.H3,
        alignItems: "flex-start",
        fontWeight: "normal"
    }
}

function information_button(THEME) {
    return {
        paddingHorizontal: 10,
        fontSize: SIZE.ICON_H2,
        color: THEME.INFORMATION_BUTTON,
    }
}

function centered_view_Alert(THEME) {
    return {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: "white",
    }
}

function alert_modal(THEME, screenHeight, screenWidth) {
    return {
        flex: 0.5,
        height: screenHeight,
        width: screenWidth - 50,
        backgroundColor: THEME.ALERT_MODAL,
        borderColor: '#000',
    }
}

function ok(THEME) {
    return {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        color: THEME.OK
    }
}
function title_modal(THEME) {
    return {
        fontSize: 16,
        color: THEME.TITLE_MODAL,
    }
}

function text_modal(THEME) {
    return {
        color: THEME.TEXT_MODAL,
        fontSize: 13,
        alignItems: "flex-start",
        textAlign: "left",
        fontWeight: "normal",
        fontStyle: "normal",
        padding: 20,
        flex: 1
    }
}

// STYLE STATIQUE : à partir de la constante styles
const styles = StyleSheet.create({
    image_container: {
        padding: 10,
    },
    image: {
        height: 150,
        width: 130,
        borderRadius: 10,
    },
    contents: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 10,
        marginEnd: 10,
    },
    header: {
        flexDirection: "row",
    },
    alert_body: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 15
    },
});