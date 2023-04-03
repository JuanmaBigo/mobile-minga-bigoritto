import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MangaDetailsFull from '../components/MangaDetailsFull'


export default function MangaDetails(props) {
    id = props.route.params.id
    return (
        <ScrollView style={{ flex: 1 }}>
            <MangaDetailsFull id={id} />
        </ScrollView>
    )
}
