import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

export default function MangaDetails(props) {
    id = props.route.params.id
    return (
        <View style={{flex: 1}}>
            <Text>MangaDetails</Text>
            <Text>MangaDetails</Text>
            <Text>MangaDetails</Text>
            <Text>id: {id}</Text>
        </View>
    )
}
