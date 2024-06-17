import React, { useState } from 'react';
import { View, Image, Text, Pressable, Modal, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function NavBar() {
    const [showModal, setShowModal] = useState(false);

    const onPress = () => {
        setShowModal(true);
    }

    return (
        <>
            <View className="bg-[#A1B0F6] flex flex-row justify-end gap-3 p-3 items-center">
                <Pressable onPress={() => {}}>
                    <FontAwesome name="search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={onPress}>
                    <AntDesign name="ellipsis1" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => {}}>
                    <AntDesign name="hearto" size={24} color="black" />
                </Pressable>
            </View>
            <Modal visible={showModal} animationType="slide">
                <View className='p-4 h-screen w-screen'>
                    <Text className='text-4xl font-bold text-center'>Meu perfil</Text>
                    <View className=''>
                        <Text>Nome</Text>
                        <Text>Email</Text>
                        <Text>Telefone</Text>
                        <Text>Endereço</Text>
                        <Text>Cidade</Text>
                    </View>
                    <View className='flex place-content-end place-items-end justify-end'>
                        <TouchableOpacity onPress={() => setShowModal(false)} className="bg-blue-500 py-2 px-4 rounded-md">
                            <Text className="text-white text-center font-semibold">Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};
