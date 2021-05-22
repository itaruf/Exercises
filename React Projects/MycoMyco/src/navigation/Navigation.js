/*IMPORTS FRAMEWORK*/
import React from 'react'
import { View } from "react-native"
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SIZE } from '../components/colorThemes';
import { useTheme } from '../../ThemeProvider';
/**/

/*IMPORTS CUSTOM COMPONENTS*/
import HomePage from "../screens/HomePage";
import Identification from "../screens/Identification";
import MycoWiki from "../screens/MycoWiki";
import Advice from "../screens/Advice";
import MemoryAid from "../screens/MemoryAid";
import MushroomDetails from "../screens/MushroomDetails";
import MushroomRecipe from "../screens/MushroomRecipe";
import Recipe from "../screens/Recipe";
import MycoQuiz from "../screens/MycoQuiz";
import MycoQuizHomePage from "../screens/MycoQuizHomePage";
import MycoQuizResults from "../screens/MycoQuizResults"
import FavoriteScreen from "../screens/FavoriteScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MycoQuizImage from "../screens/MycoQuizImage";
/**/

/*CREATION DE LA NAVIGATION STACK + TAB NAV*/
const Tab = createMaterialBottomTabNavigator();
const HomePageStack = createStackNavigator();
const IdentificationStack = createStackNavigator();
const MycoWikiStack = createStackNavigator();
const AdviceStack = createStackNavigator();
const MemoryAidStack = createStackNavigator();
/**/

/*CREATION DES VUES STACK*/
//création de la vue stack identfication
function IdentificationStackScreen() {
    return (
        <IdentificationStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <IdentificationStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                name="Identification" // nom affiché dans le header
                component={Identification}
                options={{
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerStyle: {
                        backgroundColor: '#833471',
                    },
                    headerShown: false,
                }}
            />
        </IdentificationStack.Navigator>
    )
}

//création de la vue stack MycoWiki
function MycoWikiStackScreen() {
    return (
        <MycoWikiStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <MycoWikiStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                name="MycoWiki"
                component={MycoWiki}
                options={{
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerStyle: {
                        backgroundColor: '#833471',
                    },
                    headerShown: false,
                }}
            />
        </MycoWikiStack.Navigator>
    )
}

//création de la vue stack Advice
function AdviceStackScreen() {
    return (
        <AdviceStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            < AdviceStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                name="Conseils et préparations"
                component={Advice}
                options={{
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerStyle: {
                        backgroundColor: '#833471',
                    },
                    headerShown: false,
                }}
            />
        </AdviceStack.Navigator>
    )
}

//création de la vue stack MemoryAid
function MemoryAidStackScreen() {
    return (
        <MemoryAidStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            < MemoryAidStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                name="Aide-mémoire"
                component={MemoryAid}
                options={{
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerStyle: {
                        backgroundColor: '#833471',
                    },
                    headerShown: false,
                }}
            />
        </MemoryAidStack.Navigator>
    )
}
//création de la vue stack HomePage
function HomePageStackScreen() {
    return (
        <HomePageStack.Navigator screenOptions={{ headerTitleAlign: "center" }} >
            <HomePageStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                name="Accueil"
                component={HomePage}
                options={{
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerStyle: {
                        backgroundColor: '#833471',
                    },
                    headerShown: false,
                }}
            />
        </HomePageStack.Navigator>
    )
}

/**/

/*CREATION DE LA BOTTOM TAB NAVIGATION*/
//affichage des vues principales dans la barre de navigation
function BottomTabNavigator() {
    const { THEME, isDark } = useTheme();
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    const navigatorOptions = {
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            },
            overlayStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                }),
            },
        }),
    }
    const notAnimation = () => ({});
    return (
        <Tab.Navigator
            lazy={false}
            initialRouteName="HomePage"
            activeColor={THEME.TAB_ICON_ACTIVE}
            inactiveColor={THEME.TAB_ICON_INNACTIVE}
            barStyle={{
                backgroundColor: THEME.BOTTOMTAB
            }}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePageStackScreen}
                options={{
                    cardStyleInterpolator: forFade,
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="MycoWiki"
                component={MycoWikiStackScreen}
                options={{
                    cardStyleInterpolator: forFade,
                    tabBarLabel: 'MycoWiki',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Identification"
                component={IdentificationStackScreen}
                options={{
                    cardStyleInterpolator: forFade,
                    tabBarLabel: 'Identification',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Advice"
                component={AdviceStackScreen}
                options={{
                    cardStyleInterpolator: forFade,
                    tabBarLabel: 'Conseils',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="basket" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="MemoryAid"
                component={MemoryAidStackScreen}
                options={{
                    cardStyleInterpolator: forFade,
                    tabBarLabel: 'Aide-mémoire',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}
/**/

const RootStack = createStackNavigator();

//affichage des vues utilisées dans la navigation
export default function Navigation() {
    // Etat, appel du mode sombre / clair
    const { THEME, isDark } = useTheme();
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    const navigatorOptions = {
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            },
            overlayStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                }),
            },
        }),
    }
    const notAnimation = () => ({});
    const WhiteScreen = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'white',
        },
    };
    const BlackScreen = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: '#121212',
        },
    };
    return (
        <NavigationContainer theme={isDark ? BlackScreen : WhiteScreen}
        >
            <RootStack.Navigator screenOptions={{
                detachPreviousScreen: true,
                cardStyleInterpolator: notAnimation,
                navigatorOptions,
                animationEnabled: false,
                headerTitleAlign: "center",
            }}
                detachInactiveScreens={false}
                mode="modal"

            >
                <RootStack.Screen
                    name=" "
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false,
                        cardStyleInterpolator: forFade
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Genres"
                    component={MushroomDetails}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Genres',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Familles"
                    component={MushroomDetails}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Familles',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Espèces"
                    component={MushroomDetails}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Espèces',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="MycoQuizHomePage"
                    component={MycoQuizHomePage}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'MycoQuiz',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="MycoQuiz"
                    component={MycoQuiz}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'MycoQuiz',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Résultats"
                    component={MycoQuizResults}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Résultats',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                        headerLeft: null,
                        gestureEnabled: false
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Preparation"
                    component={MushroomRecipe}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Préparation',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Recette"
                    component={Recipe}
                    options={{
                        headerStyle: {
                            backgroundColor: "transparent",
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: '',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                        headerTransparent: true,
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="QuizImage"
                    component={MycoQuizImage}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerTintColor: 'white',
                        title: 'MycoQuiz - Images',
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Favoris"
                    component={FavoriteScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        title: 'Favoris',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: SIZE.H1,
                        },
                    }}
                />
                <RootStack.Screen style={{ flex: 1, justifyContent: "flex-end" }}
                    name="Historique"
                    component={HistoryScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: THEME.HEADER,
                            elevation: 0,
                            shadowRadius: 0,
                            shadowColor: 'transparent',
                            shadowOffset: {
                                height: 0,
                            },
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerTintColor: 'white',
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}