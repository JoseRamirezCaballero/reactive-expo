import React from 'react'
import { View } from 'react-native'
import { FAB } from 'react-native-paper';

export default function PostsScreen() {
    const onPress = () => {
        console.log('Camera')
    }

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <FAB.Group
                open={open}
                visible
                icon='pencil-plus'
                actions={[
                    {
                        icon: 'email',
                        label: 'Email',
                        onPress: () => console.log('Pressed email'),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => console.log('Pressed notifications'),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </View >
    )
}
