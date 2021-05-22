// Fonction qui permet de récupérer une image suivant un nom donné en paramètre
const Images = (item) => {
    // Pour chacun des noms, on récupère l'image associée
    switch (item) {
        case "À chapeaux":
            return (
                require('../assets/Cles/A_chapeaux.png')
            )
        case "À formes particulières":
            return (
                require('../assets/Cles/Particuliere.png')
            )
        case "À tubes":
            return (
                require('../assets/Cles/A_tubes.png')
            )
        case "À lames":
            return (
                require('../assets/Cles/A_lames.png')
            )
        case "Autres types":
            return (
                require('../assets/Cles/Autres_types.png')
            )
        case "Blancs, gris, rosés":
            return (
                require('../assets/Cles/Pores_blancs.png')
            )
        case "Jaunes, verdâtres, olivâtres":
            return (
                require('../assets/Cles/Pores_jaunes.png')
            )
        case "Rouges, orangés":
            return (
                require('../assets/Cles/Pores_rouges.png')
            )
        case "Grenue":
            return (
                require('../assets/Cles/Grenue.png')
            )
        case "Fibreuse":
            return (
                require('../assets/Cles/Fibreuse.png')
            )
        case "Latex":
            return (
                require('../assets/Cles/Latex.png')
            )
        case "Pas de latex":
            return (
                require('../assets/Cles/Pas_latex.png')
            )
        case "Blanches":
            return (
                require('../assets/Cles/Blanches.png')
            )
        case "Roses":
            return (
                require('../assets/Cles/Roses.jpg')
            )
        case "Ôcres, gris-beiges, bruns":
            return (
                require('../assets/Cles/Ocres.png')
            )
        case "Brun-pourpres, violettes":
            return (
                require('../assets/Cles/Violets.png')
            )
        case "Noires":
            return (
                require('../assets/Cles/Noires.png')
            )
        case "Volve":
            return (
                require('../assets/Cles/Volve.png')
            )
        case "Excentré":
            return (
                require('../assets/Cles/Excentre.png')
            )
        case "Volve+Anneau":
            return (
                require('../assets/Cles/Volve_Anneau.png')
            )
        case "Anneau":
            return (
                require('../assets/Cles/Anneau.png')
            )
        case "Cortine":
            return (
                require('../assets/Cles/Cortine.png')
            )
        case "Nu":
            return (
                require('../assets/Cles/Nu.png')
            )
        case "Épaisses/Espacées":
            return (
                require('../assets/Cles/Epaisses_espacees.png')
            )
        case "Fines":
            return (
                require('../assets/Cles/Fines.png')
            )
        case "Adnées à échancrées":
            return (
                require('../assets/Cles/Adnees_echancrees.png')
            )
        case "Décurrentes":
            return (
                require('../assets/Cles/Decurrentes.png')
            )
        case "Libres":
            return (
                require('../assets/Cles/Libres.png')
            )
        case "Adnées ou décurrentes":
            return (
                require('../assets/Cles/Adnees_decurrentes.png')
            )
        case "Lisse/alvéolé":
            return (
                require('../assets/Cles/Alveole.jpeg')
            )
        case "Poré":
            return (
                require('../assets/Cles/Autres_types.png')
            )
        case "À aiguillons":
            return (
                require('../assets/Cles/A_aiguillons.jpeg')
            )
        case "Plissé":
            return (
                require('../assets/Cles/Plisse.jpeg')
            )
        case "Externe sans chapeau":
            return (
                require('../assets/Cles/Externe.jpeg')
            )
        case "Interne":
            return (
                require('../assets/Cles/Interne.jpeg')
            )
        case "En coupe":
            return (
                require('../assets/Cles/En_coupe.jpeg')
            )
        case "Gélatineux":
            return (
                require('../assets/Cles/Gelatineux.jpeg')
            )
        case "En pilon, arbuscule ou corail":
            return (
                require('../assets/Cles/En_pilon.jpeg')
            )
        case "Globuleux à alvéoles ou en forme de selle":
            return (
                require('../assets/Cles/Globuleux_alveole.jpg')
            )
        case "Globuleux":
            return (
                require('../assets/Cles/Globuleux.jpeg')
            )
        case "Gélatineux et nauséabonds":
            return (
                require('../assets/Cles/Gelatineux_nauseabonds.jpeg')
            )
        case "Gyroporus":
            return (
                require('../assets/Gyroporus/Gyroporus_castaneus.jpg')
            )
        case "Tylopilus":
            return (
                require('../assets/Tylopilus/Tylopilus_felleus1.jpg')
            )
        case "Leccinum":
            return (
                require('../assets/Leccinum/Leccinum_aurantiacum2.jpg')
            )
        case "Xerocomus":
            return (
                require('../assets/Xerocomus/Xerocomus_badius1.jpg')
            )
        case "Boletus":
            return (
                require('../assets/Boletus/Aureoboletus_gentilis1.jpeg')
            )
        case "Suillus":
            return (
                require('../assets/Suillus/Suillus_luteus5.jpg')
            )
        case "Chalciporus":
            return (
                require('../assets/Chalciporus/Chalciporus_piperatus.jpg')
            )
        case "Boletus Rouge":
            return (
                require('../assets/Boletus/Boletus_satanas.jpg')
            )
        case "Lactaires":
            return (
                require('../assets/Lactaires/Lactarius_salmonicolor2.jpg')
            )
        case "Russules":
            return (
                require('../assets/Russules/Russula_amara3.jpg')
            )
        case "Pleurotes":
            return (
                require('../assets/Pleurotes/Lentinellus_cocheatus.jpg')
            )
        case "Schizophylles":
            return (
                require('../assets/Schizophylles/Schizophyllum_commune07.jpg')
            )
        case "Amanites sans anneau":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea2.jpg')
            )
        case "Amanites avec anneau":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria10.jpeg')
            )
        case "Lépiotes":
            return (
                require('../assets/Lepiotes/Lepiote_elevee/Macrolepiota_procera8.jpg')
            )
        case "Armillaires":
            return (
                require('../assets/Armillaires/Armillaria_mellea1.jpeg')
            )
        case "Hygrophores":
            return (
                require('../assets/Hygrophores/Hygrophorus_ligatus.jpg')
            )
        case "Laccaires":
            return (
                require('../assets/Laccaires/Laccaria_amethystina1.jpg')
            )
        case "Marasmes":
            return (
                require('../assets/Marasmes/Rhodocollybia_maculata4.jpg')
            )
        case "Mycènes":
            return (
                require('../assets/Mycenes/Mycena_pelianthina1.jpg')
            )
        case "Collybies":
            return (
                require('../assets/Collybies/Gymnopus_dryophilus1.jpeg')
            )
        case "Tricholomes":
            return (
                require('../assets/Tricholomes/Tricholoma_terreum2.jpg')
            )
        case "Clitocybes":
            return (
                require('../assets/Clitocybes/Clitocybe_nebularis3.jpeg')
            )
        case "Volvaires":
            return (
                require('../assets/Volvaires/Volvariella_pusilla.jpeg')
            )
        case "Entolomes":
            return (
                require('../assets/Entolomes/Entoloma_rhodopolium3.jpeg')
            )
        case "Clitopiles":
            return (
                require('../assets/Clitopiles/Clitopilus_prunulus3.jpeg')
            )
        case "Plutées":
            return (
                require('../assets/Plutees/Pluteus_cervinus3.jpg')
            )
        case "Crépidotes":
            return (
                require('../assets/Crepidotes/Crepidotus_mollis2.jpeg')
            )
        case "Pholiotes":
            return (
                require('../assets/Pholiotes/Pholiotes.jpg')
            )
        case "Galères":
            return (
                require('../assets/Galeres/Galerina_marginata3.jpeg')
            )
        case "Cortinaires":
            return (
                require('../assets/Cortinaires/Cortinarius_anserinus2.jpeg')
            )
        case "Inocybes":
            return (
                require('../assets/Inocybes/Inocybe3.jpg')
            )
        case "Hébélomes":
            return (
                require('../assets/Hebelomes/Hebeloma_crustiliniforme2.jpg')
            )
        case "Paxilles":
            return (
                require('../assets/Paxilles/Paxillus_involutus2.jpg')
            )
        case "Agarics":
            return (
                require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis2.jpg')
            )
        case "Strophaires":
            return (
                require('../assets/Strophaires/Kuehneromyces_mutabilis2.jpg')
            )
        case "Psilocybes":
            return (
                require('../assets/Psilocybes/Psilocybes.jpg')
            )
        case "Hypholomes":
            return (
                require('../assets/Hypholomes/Hypholoma_fasciculare1.jpg')
            )
        case "Panéoles":
            return (
                require('../assets/Paneoles/Panaeolus_subbalteatus.jpg')
            )
        case "Psathyrelles":
            return (
                require('../assets/Psathyrelles/Psathyrelle.jpg')
            )
        case "Gomphides":
            return (
                require('../assets/Gomphides/Gomphidius_roseus1.jpeg')
            )
        case "Coprins":
            return (
                require('../assets/Coprins/Coprinus_micaceus2.jpeg')
            )
        case "Champignons en forme de \"croûtes\"":
            return (
                require('../assets/Champignons_en_forme_de_croutes/Forme_de_croute.jpeg')
            )
        case "Mérules":
            return (
                require('../assets/Merules/Merules.jpg')
            )
        case "Polypores":
            return (
                require('../assets/Polypores/Grifola_frondosa3.jpg')
            )
        case "Hydnes":
            return (
                require('../assets/Hydnes/Hydnum_repandum.jpg')
            )
        case "Girolles et Chanterelles":
            return (
                require('../assets/Girolles_et_chanterelles/Cantharellus_cibarius.jpeg')
            )
        case "Auriculaires":
            return (
                require('../assets/Auriculaires/Auricularia1.jpg')
            )
        case "Pézizes":
            return (
                require('../assets/Pezizes/Peziza_badia2.jpg')
            )
        case "Héloties":
            return (
                require('../assets/Heloties/Chlorociboria_aeruginescens1.jpg')
            )
        case "Trémelles":
            return (
                require('../assets/Tremelles/Tremella_mesenterica.jpg')
            )
        case "Calocères":
            return (
                require('../assets/Caloceres/Calocera_viscosa2.jpeg')
            )
        case "Clavaires":
            return (
                require('../assets/Clavaires/Clavaire.jpg')
            )
        case "Morilles":
            return (
                require('../assets/Morilles/Morchella_prava.jpg')
            )
        case "Gyromitres":
            return (
                require('../assets/Gyromitres/Gyromitra_esculenta.jpeg')
            )
        case "Helvelles":
            return (
                require('../assets/Helvelles/Helvelle.jpg')
            )
        case "Sclérodermes":
            return (
                require('../assets/Sclerodermes/Scleroderma_citrinum.jpg')
            )
        case "Géastres":
            return (
                require('../assets/Geastres/Myriostoma_coliforme.jpg')
            )
        case "Vesses":
            return (
                require('../assets/Vesses/Vesse_de_loup_perlee.jpg')
            )
        case "Truffes":
            return (
                require('../assets/Truffes/Tuber_brumale.jpg')
            )
        case "Phallus":
            return (
                require('../assets/Phallus/Phallus_impudicus1.jpg')
            )
        case "Clathres":
            return (
                require('../assets/Clathres/Clathrus_archeri2.jpg')
            )
        case "Agaric champêtre":
            return (
                require('../assets/Agarics/Agaricus_campestris/Agaricus_campestris2.jpg')
            )
        case "Agaric des trottoirs":
            return (
                require('../assets/Agarics/Agaricus_bitorquis/Agaricus_bitorquis3.jpg')
            )
        case "Agaric des forêts":
            return (
                require('../assets/Agarics/Agaricus_sylvaticus/Agaricus_sylvaticus.jpg')
            )
        case "Agaricus section minores":
            return (
                require('../assets/Agarics/Agaricus_section_minores/Agaricus_section_minores.jpg')
            )
        case "Agaric des jachères":
            return (
                require('../assets/Agarics/Agaricus_arvensis/Agaricus_arvensis3.jpeg')
            )
        case "Agaric jaunissant":
            return (
                require('../assets/Agarics/Agaricus_xanthodermus/Agaricus_xanthodermus2.jpeg')
            )
        case "Amanite fauve":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_fauve/Amanita_fulva2.jpg')
            )
        case "Amanite argentée":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_argentee/Amanita_argentea3.jpg')
            )
        case "Amanite vaginée":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_vaginee/Amanita_vaginata.jpg')
            )
        case "Amanite à cocarde":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_a_cocarde/Amanita_battarrae5.jpg')
            )
        case "Amanite safran":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_safran/Amanita_crocea.jpg')
            )
        case "Amanite impériale":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_imperiale/Amanita_ceciliae.jpg')
            )
        case "Amanite livide":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_livide/Amanita_lividopallescens.jpg')
            )
        case "Amanite des aulnes":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_des_aulnes/Amanita_friabilis.jpg')
            )
        case "Amanite martelée":
            return (
                require('../assets/Amanites_sans_anneau/Amanite_martelee/Amanita_simulans2.jpg')
            )
        case "Amanite phalloide":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_phalloide/Amanita_phalloides3.jpeg')
            )
        case "Amanite ovoïde":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_ovoide/Amanita_ovoidea.jpg')
            )
        case "Amanite vireuse":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_vireuse/Amanita_virosa.jpg')
            )
        case "Amanite printanière":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_printaniere/Amanita_verna.jpg')
            )
        case "Amanite jonquille":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_jonquille/Amanita_gemmata.jpg')
            )
        case "Amanite des césars":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_des_cesars/Amanita_caesarea.jpg')
            )
        case "Amanite citrine":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_citrine/Amanita_citrina1.jpg')
            )
        case "Amanite panthère":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_panthere/Amanita_pantherina4.jpg')
            )
        case "Amanite porphyre":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_porphyre/Amanita_porphyria.jpg')
            )
        case "Amanite tue-mouche":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_tue_mouche/Amanita_muscaria1.jpeg')
            )
        case "Amanite rougissante":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_rougissante/Amanita_rubescens2.jpeg')
            )
        case "Amanite épaisse":
            return (
                require('../assets/Amanites_avec_anneau/Amanite_epaisse/Amanita_excelsa1.jpg')
            )
        case "Lépiotes au sens strict":
            return (
                require('../assets/Lepiotes/Lepiotes_au_sens_strict/Lepiota_sensu_stricto.jpg')
            )
        case "Lépiote des jardins":
            return (
                require('../assets/Lepiotes/Lepiote_des_jardins/Chlorophyllum_brunneum2.jpeg')
            )
        case "Lépiote déguenillée":
            return (
                require('../assets/Lepiotes/Lepiote_deguenillee/Macrolepiota_rhacodes.jpg')
            )
        case "Lépiote déguenillée 2":
            return (
                require('../assets/Lepiotes/Lepiote_deguenillee2/Chlorophyllus_olivieri.jpeg')
            )
        case "Lépiote de Morgan":
            return (
                require('../assets/Lepiotes/Lepiote_de_Morgan/Chlorophyllum_molybdites2.jpg')
            )
        case "Lépiote élevée":
            return (
                require('../assets/Lepiotes/Lepiote_elevee/Macrolepiota_procera8.jpg')
            )
        case "Lépiote excoriée":
            return (
                require('../assets/Lepiotes/Lepiote_excoriee/Macrolepiota_excoriata.jpeg')
            )
        case "Lépiote gracile":
            return (
                require('../assets/Lepiotes/Lepiote_gracile/Macrolepiota_rickenii.jpg')
            )
        case "Lépiote mammelonnée":
            return (
                require('../assets/Lepiotes/Lepiote_mammelonnee/Macrolepiota_mastoidea2.jpg')
            )
        case "Immuable à légèrement rosissante":
            return (
                require('../assets/Cles/Legerement_rosissante.jpeg')
            )
        case "Immuable à légèrement rougissante":  // ! //
            return (
                require('../assets/Cles/Immuable_a_legerement_rougissante.jpeg')
            )
        case "Nettement rougissante":  // ! //
            return (
                require('../assets/Cles/Nettement_rougissante.jpeg')
            )
        case "Jaunissante":
            return (
                require('../assets/Cles/Chair_jaunissante.jpeg')
            )
        case "Agréable": // ! //
            return (
                require('../assets/Cles/Agreable.png')
            )
        case "Désagréable": // ! //
            return (
                require('../assets/Cles/Desagreable.png')
            )
        case "À roue dentée":
            return (
                require('../assets/Cles/Roue_dentee.png')
            )
        case "Large en bas":
            return (
                require('../assets/Cles/Large_en_bas.jpeg')
            )
        case "En sac":
            return (
                require('../assets/Cles/Volve_sac.jpeg')
            )
        case "Circoncise":
            return (
                require('../assets/Cles/Volve_circoncise.jpeg')
            )
        case "Friable":
            return (
                require('../assets/Cles/Volve_friable.jpeg')
            )
        case "Napiforme":
            return (
                require('../assets/Cles/Volve_napiforme.jpeg')
            )
        case "Petits":
            return (
                require('../assets/Cles/Petits.jpg')
            )
        case "Grands":
            return (
                require('../assets/Cles/Grands.jpeg')
            )
        case "Rougissante":
            return (
                require('../assets/Cles/Rougissante.jpeg')
            )
        case "Immuable":
            return (
                require('../assets/Cles/Immuable.jpeg')
            )
        case "Simple épais":
            return (
                require('../assets/Cles/Simple_epais.png')
            )
        case "Nettement chiné":
            return (
                require('../assets/Cles/Nettement_chine.jpeg')
            )
        case "Non chiné ou faiblement":
            return (
                require('../assets/Cles/Non_chine.jpg')
            )
        case "Simple":
            return (
                require('../assets/Cles/Simple.png')
            )
        case "Double":
            return (
                require('../assets/Cles/Anneau_double.png')
            )
        case "Risotto aux cèpes":
            return (
                require('../assets/Recettes/Risottocepes.jpg')
            )
        case "Sauce aux cèpes":
            return (
                require('../assets/Recettes/Saucecepes.jpg')
            )
        case "Fricassée de champignons flambés":
            return (
                require('../assets/Recettes/Fricasseechampignons.jpg')
            )
        case "Pâtes aux boulettes & sauce champignons":
            return (
                require('../assets/Recettes/Patesboulettessaucechampignons.jpg')
            )
        case "Poulet aux champignons et à la sauce romarin":
            return (
                require('../assets/Recettes/Pouletchampignonssauceromarin.jpg')
            )
        case "Champignons aux deux chèvres gratinés":
            return (
                require('../assets/Recettes/Champignonsdeuxchevres.jpg')
            )
        case "Oeufs cocotte aux champignons":
            return (
                require('../assets/Recettes/Oeufscocottechampignons.jpg')
            )
        case "Quiche au tofu et aux champignons (recette minceur)":
            return (
                require('../assets/Recettes/Quichetofuchampignons.jpg')
            )
        case "Salade de girolles":
            return (
                require('../assets/Recettes/Saladedegirolles.jpg')
            )
        case "Noisettes de saumon aux champignons":
            return (
                require('../assets/Recettes/Saumonchampignons.jpg')
            )
        case "Quiche poireau champignons":
            return (
                require('../assets/Recettes/QuicheChampignons.jpg')
            )
        case "Velouté de cèpes":
            return (
                require('../assets/Recettes/Veloutecepes.jpg')
            )
        default:
            return (
                require('../assets/mushroom.png')
            )
    }
}

export default Images