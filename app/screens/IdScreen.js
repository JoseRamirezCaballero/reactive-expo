import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import { Button } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';

export default function IdScreen() {
    const [id, setId] = useState(uuid.v4())

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(id);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text>USER ID:</Text>
            <Text>{id}</Text>
            <Button icon="content-copy" mode="contained" onPress={copyToClipboard}>
                Copy
            </Button>
            <StatusBar style="auto" />
        </View>
    )
}
