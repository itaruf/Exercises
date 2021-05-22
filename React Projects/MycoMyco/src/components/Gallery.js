//IMPORTS FRAMEWORKS
import React from 'react'
import { StyleSheet, LogBox } from "react-native"
import Gallery from 'react-native-image-gallery';

LogBox.ignoreLogs(['react-native-image-gallery, Please provide dimensions of your local images']);

//Fonction qui va permettre d'afficher plusieurs images spécifiques pour un champignon
const Gall = (item) => {
    // Pour chaque nom pris en entrée, on récupère sa série d'images
    switch (item) {
        case "Gyroporus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Gyroporus/Gyroporus_castaneus.jpg') },
                        { source: require('../assets/Gyroporus/Gyroporus_castaneus1.jpg') },
                        { source: require('../assets/Gyroporus/Gyroporus_cyanescens1.jpg') },
                    ]}
                />
            )
        case "Tylopilus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Tylopilus/Tylopilus_felleus.jpg') },
                        { source: require('../assets/Tylopilus/Tylopilus_felleus1.jpg') },
                        { source: require('../assets/Tylopilus/Tylopilus_rubrobrunneus.jpg') },
                    ]}
                />
            )
        case "Leccinum":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Leccinum/Leccinum_aurantiacum2.jpg') },
                        { source: require('../assets/Leccinum/Leccinum_aurantiacum5.jpg') },
                        { source: require('../assets/Leccinum/Leccinum_duriusculum2.jpg') },
                    ]}
                />
            )
        case "Xerocomus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Xerocomus/Xerocomus_badius1.jpg') },
                        { source: require('../assets/Xerocomus/Xerocomus_chrysenteron1.jpg') },
                        { source: require('../assets/Xerocomus/Xerocomus_chrysenteron4.jpg') },
                    ]}
                />
            )
        case "Boletus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Boletus/Aureoboletus_gentilis1.jpeg') },
                        { source: require('../assets/Boletus/Aureoboletus_gentilis1.jpeg') },
                        { source: require('../assets/Boletus/Boletus_edulis1.jpeg') },
                        { source: require('../assets/Boletus/Boletus_edulis2.jpeg') },
                        { source: require('../assets/Boletus/Boletus_edulis3.jpeg') },
                    ]}
                />
            )
        case "Suillus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Suillus/Suillus_bovinus2.jpg') },
                        { source: require('../assets/Suillus/Suillus_bovinus3.jpg') },
                        { source: require('../assets/Suillus/Suillus_grevillei3.jpg') },
                        { source: require('../assets/Suillus/Suillus_luteus5.jpg') },
                    ]}
                />
            )
        case "Chalciporus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Chalciporus/Chalciporus_piperatus.jpg') },
                        { source: require('../assets/Chalciporus/Chalciporus_piperatus1.jpg') },
                    ]}
                />
            )
        case "Boletus Rouge":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Boletus/Boletus_erythropus2.jpeg') },
                        { source: require('../assets/Boletus/Boletus_erythropus4.jpeg') },
                        { source: require('../assets/Boletus/Boletus_satanas.jpg') },
                    ]}
                />
            )
        case "Lactaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lactaires/Lactarius_deliciosus3.jpg') },
                        { source: require('../assets/Lactaires/Lactarius_quietus3.jpg') },
                        { source: require('../assets/Lactaires/Lactarius_salmonicolor2.jpg') },
                    ]}
                />
            )
        case "Russules":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Russules/Russula_amara3.jpg') },
                        { source: require('../assets/Russules/Russula_brunneoviolacea2.jpg') },
                        { source: require('../assets/Russules/Russula_brunneoviolacea4.jpg') },
                        { source: require('../assets/Russules/Russula_lepida3.jpg') },
                    ]}
                />
            )
        case "Pleurotes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Pleurotes/Lentinellus_cocheatus.jpg') },
                        { source: require('../assets/Pleurotes/Phyllotopsis_nidulans2.jpg') },
                        { source: require('../assets/Pleurotes/Phyllotopsis_nidulans3.jpg') },
                    ]}
                />
            )
        case "Schizophylles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Schizophylles/Langue_de_boeuf.jpg') },
                        { source: require('../assets/Schizophylles/Schizophyllum_commune01.jpg') },
                        { source: require('../assets/Schizophylles/Schizophyllum_commune07.jpg') },
                    ]}
                />
            )
        case "Amanites sans anneau":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_argentee/Amanita_argentea.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis.jpg') },
                    ]}
                />
            )
        case "Amanites avec anneau":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_citrine/Amanita_citrina1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_epaisse/Amanita_excelsa.jpg') },
                    ]}
                />
            )
        case "Lépiotes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Chlorophyllum_brunneum3.jpg') },
                        { source: require('../assets/Lepiotes/Macrolepiota_procera1.jpg') },
                        { source: require('../assets/Lepiotes/Macrolepiota_procera8.jpg') },
                    ]}
                />
            )
        case "Armillaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Armillaires/Armillaria_mellea.jpg') },
                        { source: require('../assets/Armillaires/Armillaria_mellea1.jpeg') },
                        { source: require('../assets/Armillaires/Armillaria_mellea4.jpeg') },
                        { source: require('../assets/Armillaires/Armillaria_mellea7.jpg') },
                    ]}
                />
            )
        case "Hygrophores":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Hygrophores/Hygrophorus_ligatus.jpg') },
                        { source: require('../assets/Hygrophores/Hygrophorus_marzuolus.jpg') },
                        { source: require('../assets/Hygrophores/Hygrophorus_pudorinus.jpg') },
                    ]}
                />
            )
        case "Laccaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Laccaires/Laccaria_amethystina1.jpg') },
                        { source: require('../assets/Laccaires/Laccaria_amethystina3.jpg') },
                        { source: require('../assets/Laccaires/Laccaria_laccata1.jpg') },
                    ]}
                />
            )
        case "Marasmes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Marasmes/Baeospora_myosura.jpg') },
                        { source: require('../assets/Marasmes/Rhodocollybia_maculata3.jpg') },
                        { source: require('../assets/Marasmes/Rhodocollybia_maculata4.jpg') },
                        { source: require('../assets/Marasmes/Rhodocollybia_maculata5.jpg') },
                    ]}
                />
            )
        case "Mycènes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Mycenes/Mycena_inclinata.jpg') },
                        { source: require('../assets/Mycenes/Mycena_pelianthina1.jpg') },
                        { source: require('../assets/Mycenes/Mycena_pelianthina2.jpg') },
                    ]}
                />
            )
        case "Collybies":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Collybies/Collybia_perronata1.jpeg') },
                        { source: require('../assets/Collybies/Collybia_perronata2.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_dryophilus1.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_dryophilus2.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_dryophilus3.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_erythropus3.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_fusipes2.jpeg') },
                        { source: require('../assets/Collybies/Gymnopus_fusipes3.jpeg') },
                    ]}
                />
            )
        case "Tricholomes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Tricholomes/Lepista_nuda2.jpg') },
                        { source: require('../assets/Tricholomes/Lepista_nuda3.jpg') },
                        { source: require('../assets/Tricholomes/Tricholoma_terreum2.jpg') },
                        { source: require('../assets/Tricholomes/Tricholoma_ustaloides1.jpg') },
                        { source: require('../assets/Tricholomes/Tricholoma_ustaloides7.jpg') },
                    ]}
                />
            )
        case "Clitocybes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Clitocybes/Clitocybe_nebularis2.jpeg') },
                        { source: require('../assets/Clitocybes/Clitocybe_nebularis3.jpeg') },
                        { source: require('../assets/Clitocybes/Clitocybe_nebularis4.jpeg') },
                        { source: require('../assets/Clitocybes/Clitocybe_nebularis5.jpeg') },
                        { source: require('../assets/Clitocybes/Clitocybe_odora2.jpeg') },
                        { source: require('../assets/Clitocybes/Clitocybe_odora3.jpeg') },
                    ]}
                />
            )
        case "Volvaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Volvaires/Volvariella_pusilla.jpeg') },
                        { source: require('../assets/Volvaires/Volvariella_nigrovolvacea.jpg') },
                        { source: require('../assets/Volvaires/Volvariella.jpg') },
                    ]}
                />
            )
        case "Entolomes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Entolomes/Entoloma_rhodopolium2.jpeg') },
                        { source: require('../assets/Entolomes/Entoloma_rhodopolium3.jpeg') },
                        { source: require('../assets/Entolomes/Entoloma_rhodopolium4.jpeg') },
                        { source: require('../assets/Entolomes/Entoloma_rhodopolium6.jpg') },
                    ]}
                />
            )
        case "Clitopiles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Clitopiles/Clitopilus_prunulus1.jpeg') },
                        { source: require('../assets/Clitopiles/Clitopilus_prunulus2.jpeg') },
                        { source: require('../assets/Clitopiles/Clitopilus_prunulus3.jpeg') },
                        { source: require('../assets/Clitopiles/Clitopilus_prunulus4.jpeg') },
                    ]}
                />
            )
        case "Plutées":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Plutees/Pluteus_cervinus2.jpg') },
                        { source: require('../assets/Plutees/Pluteus_cervinus3.jpg') },
                        { source: require('../assets/Plutees/Pluteus_cervinus4.jpg') },
                    ]}
                />
            )
        case "Crépidotes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Crepidotes/Crepidotus_mollis1.jpeg') },
                        { source: require('../assets/Crepidotes/Crepidotus_mollis2.jpeg') },
                    ]}
                />
            )
        case "Pholiotes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Pholiotes/Pholiota_astragalina.jpg') },
                        { source: require('../assets/Pholiotes/Pholiota_communis.jpg') },
                        { source: require('../assets/Pholiotes/Pholiota_squarrosa.jpg') },
                        { source: require('../assets/Pholiotes/Pholiotes.jpg') },
                    ]}
                />
            )
        case "Galères":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Galeres/Galerina_marginata1.jpg') },
                        { source: require('../assets/Galeres/Galerina_marginata2.jpg') },
                        { source: require('../assets/Galeres/Galerina_marginata3.jpeg') },
                    ]}
                />
            )
        case "Cortinaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Cortinaires/cortinaire4.jpg') },
                        { source: require('../assets/Cortinaires/Cortinarius_anserinus2.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_caperatus1.jpg') },
                        { source: require('../assets/Cortinaires/Cortinarius_purpurascens2.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_purpurascens3.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_sp1.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_torvus4.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_violaceus4.jpeg') },
                        { source: require('../assets/Cortinaires/Cortinarius_violaceus5.jpeg') },
                    ]}
                />
            )
        case "Inocybes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Inocybes/Inocybe_sp1.jpg') },
                        { source: require('../assets/Inocybes/Inocybe_sp2.jpg') },
                        { source: require('../assets/Inocybes/Inocybe3.jpg') },
                    ]}
                />
            )
        case "Hébélomes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Hebelomes/Hebeloma_crustiliniforme1.jpg') },
                        { source: require('../assets/Hebelomes/Hebeloma_crustiliniforme2.jpg') },
                        { source: require('../assets/Hebelomes/Hebeloma_crustiliniforme3.jpg') },
                    ]}
                />
            )
        case "Paxilles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Paxilles/Paxillus_involutus2.jpg') },
                        { source: require('../assets/Paxilles/Paxillus_involutus3.jpg') },
                        { source: require('../assets/Paxilles/Paxillus_involutus4.jpg') },
                    ]}
                />
            )
        case "Agarics":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_arvensis/Agaricus_arvensis.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis.jpg') },
                        { source: require('../assets/Agarics/Agaricus_campestris/Agaricus_campestris.jpg') },
                    ]}
                />
            )
        case "Strophaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Strophaires/Kuehneromyces_mutabilis2.jpg') },
                        { source: require('../assets/Strophaires/Kuehneromyces_mutabilis3.jpg') },
                        { source: require('../assets/Strophaires/Stropharia_aeruginosa3.jpg') },
                    ]}
                />
            )
        case "Psilocybes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Psilocybes/Psilocybe_bohemica.jpg') },
                        { source: require('../assets/Psilocybes/Psilocybes.jpg') },
                        { source: require('../assets/Psilocybes/Psilocybes2.jpg') },
                    ]}
                />
            )
        case "Hypholomes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Hypholomes/Hypholoma_fasciculare1.jpg') },
                        { source: require('../assets/Hypholomes/Hypholoma_fasciculare2.jpg') },
                        { source: require('../assets/Hypholomes/Hypholoma_fasciculare3.jpg') },
                    ]}
                />
            )
        case "Panéoles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Paneoles/Panaeolus_papilionaceus.jpg') },
                        { source: require('../assets/Paneoles/Panaeolus_semiovatus.jpg') },
                        { source: require('../assets/Paneoles/Panaeolus_subbalteatus.jpg') },
                    ]}
                />
            )
        case "Psathyrelles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Psathyrelles/Psathyrella_piluliformis.jpeg') },
                        { source: require('../assets/Psathyrelles/Psathyrelle.jpg') },
                        { source: require('../assets/Psathyrelles/Psathyrelle2.jpg') },
                    ]}
                />
            )
        case "Gomphides":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Gomphides/Gomphidius_roseus1.jpeg') },
                        { source: require('../assets/Gomphides/Gomphide1.jpeg') },
                        { source: require('../assets/Gomphides/Gomphide.jpeg') },

                    ]}
                />
            )
        case "Coprins":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Coprins/Coprinus_lagopus1.jpeg') },
                        { source: require('../assets/Coprins/Coprinus_lagopus3.jpeg') },
                        { source: require('../assets/Coprins/Coprinus_micaceus2.jpeg') },
                        { source: require('../assets/Coprins/Coprinus_picaceus.jpeg') },
                    ]}
                />
            )
        case "Champignons en forme de \"croûtes\"":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Champignons_en_forme_de_croutes/Forme_de_croute.jpeg') },
                    ]}
                />
            )
        case "Mérules":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Merules/Merules.jpg') },
                        { source: require('../assets/Merules/Merules2.jpg') },
                        { source: require('../assets/Merules/Serpula_lacrymans.jpg') },
                    ]}
                />
            )
        case "Polypores":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Polypores/Grifola_frondosa3.jpg') },
                        { source: require('../assets/Polypores/Grifola_frondosa5.jpg') },
                        { source: require('../assets/Polypores/Trametes.jpg') },
                        { source: require('../assets/Polypores/Trametes_versicolor2.jpg') },
                        { source: require('../assets/Polypores/Trametes2.jpg') },
                    ]}
                />
            )
        case "Hydnes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Hydnes/Hydnum.jpg') },
                        { source: require('../assets/Hydnes/Hydnum_repandum.jpg') },
                        { source: require('../assets/Hydnes/Hydnum_repandum2.jpg') },
                    ]}
                />
            )
        case "Girolles et Chanterelles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Girolles_et_chanterelles/Cantharellus_cibarius.jpeg') },
                        { source: require('../assets/Girolles_et_chanterelles/Hygrophoropsis_aurantiaca2.jpeg') },
                        { source: require('../assets/Girolles_et_chanterelles/Hygrophoropsis_aurantiaca4.jpeg') },
                        { source: require('../assets/Girolles_et_chanterelles/Grifola_frondosa_01.jpg') },
                        { source: require('../assets/Girolles_et_chanterelles/Grifola_frondosa.jpg') },
                        { source: require('../assets/Girolles_et_chanterelles/Grifola_frondosa2.jpg') },
                    ]}
                />
            )
        case "Auriculaires":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Auriculaires/Auricularia.jpg') },
                        { source: require('../assets/Auriculaires/Auricularia1.jpg') },
                    ]}
                />
            )
        case "Pézizes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Pezizes/Peziza_badia1.jpg') },
                        { source: require('../assets/Pezizes/Peziza_badia2.jpg') },
                        { source: require('../assets/Pezizes/Peziza_badia5.jpg') },
                    ]}
                />
            )
        case "Héloties":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Heloties/Chlorociboria_aeruginescens1.jpg') },
                        { source: require('../assets/Heloties/Chlorociboria_aeruginescens2.jpg') },
                        { source: require('../assets/Heloties/Heloties.jpg') },
                    ]}
                />
            )
        case "Trémelles":
            return (
                <Gallery
                    style={styles.image}
                    images={[

                        { source: require('../assets/Tremelles/Tremella_mesenterica.jpg') },
                        { source: require('../assets/Tremelles/Tremella_foliacea.jpg') },
                        { source: require('../assets/Tremelles/Tremella_mesenterica.jpg') },
                    ]}
                />
            )
        case "Calocères":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Caloceres/Calocera_viscosa2.jpeg') },
                        { source: require('../assets/Caloceres/Calocera_viscosa5.jpeg') },
                        { source: require('../assets/Caloceres/Calocera_viscosa6.jpeg') },
                    ]}
                />
            )
        case "Clavaires": {
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Clavaires/Clavaire.jpg') },
                        { source: require('../assets/Clavaires/Clavaire1.jpg') },
                        { source: require('../assets/Clavaires/Clavaire2.jpg') },
                        { source: require('../assets/Clavaires/Ramaria_stricta1.jpeg') },
                    ]}
                />
            )
        }
        case "Morilles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Morilles/Morchella_prava.jpg') },
                        { source: require('../assets/Morilles/Morchella_rufobrunnea.jpg') },
                        { source: require('../assets/Morilles/Morchella_steppicola.jpg') },
                    ]}
                />
            )
        case "Gyromitres":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Gyromitres/Gyromitra_esculenta.jpeg') },
                        { source: require('../assets/Gyromitres/Gyromitre.jpg') },
                        { source: require('../assets/Gyromitres/Gyromitre1.jpg') },

                    ]}
                />
            )
        case "Helvelles":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Helvelles/Helvelle.jpg') },
                        { source: require('../assets/Helvelles/Helvella_crispa1.jpg') },
                        { source: require('../assets/Helvelles/Helvelle2.jpg') },
                    ]}
                />
            )
        case "Sclérodermes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Sclerodermes/Scleroderma_citrinum.jpg') },
                        { source: require('../assets/Sclerodermes/Scleroderma_citrinum1.jpg') },
                        { source: require('../assets/Sclerodermes/Scleroderma_geaster.jpg') },
                    ]}
                />
            )
        case "Géastres":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Geastres/Geastrum_triplex.jpg') },
                        { source: require('../assets/Geastres/Geastrum_triplex1.jpg') },
                        { source: require('../assets/Geastres/Myriostoma_coliforme.jpg') },
                    ]}
                />
            )
        case "Vesses":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Vesses/Vascellum_pratense.jpg') },
                        { source: require('../assets/Vesses/Vesse_de_loup_perlee.jpg') },
                        { source: require('../assets/Vesses/Vesses_de_loups.jpg') },
                    ]}
                />
            )
        case "Truffes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Truffes/Tuber_aestivum.jpg') },
                        { source: require('../assets/Truffes/Tuber_brumale.jpg') },
                        { source: require('../assets/Truffes/Tuber_indicum.jpg') },
                    ]}
                />
            )
        case "Phallus":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Phallus/Phallus_impudicus.jpg') },
                        { source: require('../assets/Phallus/Phallus_impudicus1.jpg') },
                        { source: require('../assets/Phallus/Phallus_indusiatus.jpg') },
                        { source: require('../assets/Phallus/Phallushadriani.jpg') },
                    ]}
                />
            )
        case "Clathres":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Clathres/Clathrus_archeri2.jpg') },
                        { source: require('../assets/Clathres/Clathrus_archeri3.jpg') },
                        { source: require('../assets/Clathres/Clathrus_archeri5.jpg') },
                    ]}
                />
            )
        case "Agaric champêtre":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_campestris/Agaricus_campestris.jpg') },
                        { source: require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus2.jpeg') },
                    ]}
                />
            )
        case "Agaric des trottoirs":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis.jpg') },
                        { source: require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis2.jpg') },
                        { source: require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis3.jpg') },
                    ]}
                />
            )
        case "Agaric des forêts":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus.jpg') },
                        { source: require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus2.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus3.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus4.jpeg') },
                    ]}
                />
            )
        case "Agaricus section minores":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_section_minores/Agaricus_section_minores.jpg') },
                    ]}
                />
            )
        case "Agaric des jachères":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_arvensis/Agaricus_arvensis.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_arvensis/Agaricus_arvensis2.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_arvensis/Agaricus_arvensis3.jpeg') },
                    ]}
                />
            )
        case "Agaric jaunissant":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Agarics/Agaricus_xanthodermus/Agaricus_xanthodermus2.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_xanthodermus/Agaricus_xanthodermus5.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_xanthodermus/Agaricus_xanthodermus6.jpeg') },
                        { source: require('../assets/Agarics/Agaricus_xanthodermus/Agaricus_xanthodermus7.jpeg') },
                    ]}
                />
            )
        case "Amanite fauve":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_fauve/Amanita_fulva.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_fauve/Amanita_fulva1.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_fauve/Amanita_fulva2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_fauve/Amanita_fulva3.jpg') },
                    ]}
                />
            )
        case "Amanite argentée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_argentee/Amanita_argentea.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_argentee/Amanita_argentea2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_argentee/Amanita_argentea3.jpg') },
                    ]}
                />
            )
        case "Amanite vaginée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_vaginee/Amanita_vaginata.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_vaginee/Amanita_vaginata1.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_vaginee/Amanita_vaginata2.jpg') },

                    ]}
                />
            )
        case "Amanite à cocarde":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae3.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae4.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae5.jpg') },
                    ]}
                />
            )
        case "Amanite safran":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea1.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea3.jpg') },
                    ]}
                />
            )
        case "Amanite impériale":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_imperiale/Amanita_ceciliae.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_imperiale/Amanita_ceciliae1.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_imperiale/Amanita_ceciliae2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_imperiale/Amanita_ceciliae3.jpg') },
                    ]}
                />
            )
        case "Amanite livide":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_livide/Amanita_lividopallescens.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_livide/Amanita_lividopallescens1.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_livide/Amanita_lividopallescens2.jpg') },
                    ]}
                />
            )
        case "Amanite des aulnes":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis3.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis4.jpg') },

                    ]}
                />
            )
        case "Amanite martelée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_sans_anneau/Amanite_martelee/Amanita_simulans2.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_martelee/Amanita_simulans3.jpg') },
                        { source: require('../assets/Amanites_sans_anneau/Amanite_martelee/Amanita_simulans4.jpg') },
                    ]}
                />
            )
        case "Amanite phalloide":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_phalloide/Amanita_phalloides2.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_phalloide/Amanita_phalloides3.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_phalloide/Amanita_phalloides4.jpeg') },
                    ]}
                />
            )
        case "Amanite ovoïde":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_ovoide/Amanita_ovoidea.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_ovoide/Amanita_ovoidea1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_ovoide/Amanita_ovoidea2.jpg') },
                    ]}
                />
            )
        case "Amanite vireuse":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_vireuse/Amanita_virosa.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_vireuse/Amanita_virosa1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_vireuse/Amanita_virosa2.jpg') },
                    ]}
                />
            )
        case "Amanite printanière":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_printaniere/Amanita_verna.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_printaniere/Amanita_verna1.jpg') },
                    ]}
                />
            )
        case "Amanite jonquille":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata3.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata4.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata5.jpg') },
                    ]}
                />
            )
        case "Amanite des césars":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea2.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea3.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea4.jpg') },
                    ]}
                />
            )
        case "Amanite citrine":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_citrine/Amanita_citrina1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_citrine/Amanita_citrina2.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_citrine/Amanita_citrina3.jpg') },
                    ]}
                />
            )
        case "Amanite panthère":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_panthere/Amanita_pantherina3.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_panthere/Amanita_pantherina4.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_panthere/Amanita_pantherina5.jpg') },
                    ]}
                />
            )
        case "Amanite porphyre":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_porphyre/Amanita_porphyria.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_porphyre/Amanita_porphyria1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_porphyre/Amanita_porphyria2.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_porphyre/Amanita_porphyria3.jpg') },
                    ]}
                />
            )
        case "Amanite tue-mouche":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria1.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria5.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria6.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria7.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria10.jpeg') },
                    ]}
                />
            )
        case "Amanite rougissante":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_rougissante/Amanita_rubescens2.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_rougissante/Amanita_rubescens4.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_rougissante/Amanita_rubescens5.jpeg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_rougissante/Amanita_rubescens6.jpeg') },
                    ]}
                />
            )
        case "Amanite épaisse":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Amanites_avec_anneau/Amanite_epaisse/Amanita_excelsa.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_epaisse/Amanita_excelsa1.jpg') },
                        { source: require('../assets/Amanites_avec_anneau/Amanite_epaisse/Amanita_excelsa2.jpg') },
                    ]}
                />
            )
        case "Lépiotes au sens strict":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiotes_au_sens_strict/Lepiota_sensu_stricto.jpg') },
                    ]}
                />
            )
        case "Lépiote des jardins":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_des_jardins/Chlorophyllum_brunneum.jpeg') },
                        { source: require('../assets/Lepiotes/Lepiote_des_jardins/Chlorophyllum_brunneum2.jpeg') },
                        { source: require('../assets/Lepiotes/Lepiote_des_jardins/Chlorophyllum_brunneum3.jpg') },
                    ]}
                />
            )
        case "Lépiote déguenillée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee/Chlorophyllum_rhacodes.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee/Chlorophyllum_rhacodes1.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee/Chlorophyllum_rhacodes2.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee/Macrolepiota_rhacodes.jpg') },
                    ]}
                />
            )
        case "Lépiote déguenillée 2":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee2/Chlorophyllus_olivieri.jpeg') },
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee2/Chlorophyllum_olivieri2.jpeg') },
                        { source: require('../assets/Lepiotes/Lepiote_deguenillee2/Chlorophyllum_olivieri3.jpg') },
                    ]}
                />
            )
        case "Lépiote de Morgan":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_de_Morgan/Chlorophyllum_molybdites.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_de_Morgan/Chlorophyllum_molybdites1.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_de_Morgan/Chlorophyllum_molybdites2.jpg') },
                    ]}
                />
            )
        case "Lépiote élevée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_elevee/Macrolepiota_procera1.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_elevee/Macrolepiota_procera2.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_elevee/Macrolepiota_procera8.jpg') },
                    ]}
                />
            )
        case "Lépiote excoriée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_excoriee/Macrolepiota_excoriata.jpeg') },
                        { source: require('../assets/Lepiotes/Lepiote_excoriee/Macrolepiota_excoriata2.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_excoriee/Macrolepiota_excoriata3.jpg') },
                    ]}
                />
            )
        case "Lépiote gracile":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_gracile/Macrolepiota_rickenii.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_gracile/Macrolepiota_rickenii2.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_gracile/Macrolepiota_rickenii3.jpg') },
                    ]}
                />
            )
        case "Lépiote mammelonnée":
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/Lepiotes/Lepiote_mammelonnee/Macrolepiota_mastoidea.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_mammelonnee/Macrolepiota_mastoidea2.jpg') },
                        { source: require('../assets/Lepiotes/Lepiote_mammelonnee/Macrolepiota_mastoidea3.jpg') },
                    ]}
                />
            )
        default:
            return (
                <Gallery
                    style={styles.image}
                    images={[
                        { source: require('../assets/mushroom.png') },
                    ]}
                />
            )
    }
}

export default Gall

const styles = StyleSheet.create({
    image: {
        backgroundColor: 'black'
    },
})