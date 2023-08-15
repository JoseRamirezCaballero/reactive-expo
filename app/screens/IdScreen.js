import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import uuid from 'react-native-uuid';

export default function IdScreen() {
    const [id, setId] = useState(uuid.v4())

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text>USER ID:</Text>
            <Text>{id}</Text>
            <StatusBar style="auto" />
        </View>
    )
}
