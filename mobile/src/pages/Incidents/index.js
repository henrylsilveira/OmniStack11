import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Incidents(){

    const navigation = useNavigation();

    function navigationToDetail(){
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList style={styles.incidentList} 
            data={[1, 2, 3, 4, 5]} 
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 250,00</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={navigationToDetail}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>
            )} />
        </View>
    );
}