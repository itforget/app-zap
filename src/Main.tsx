import { View, Icon, SearchIcon, Input, InputField, BellIcon, Text, Card, Box } from "@gluestack-ui/themed";
import MenuButton from "./components/MenuButton";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { Heart, MapPinIcon } from "lucide-react-native";
import { Image } from "@gluestack-ui/themed";

export default function Main() {
    return (
        <>
            <View bg="#ffffff">
                <View borderBottomWidth={1} borderColor="#223FC0" padding={15} flexDirection='row' alignItems='center'>
                    <Input width={240} variant="rounded">
                        <InputSlot pl="$3">
                            <InputIcon as={SearchIcon} />
                        </InputSlot>
                        <InputField placeholder="Busca" />
                    </Input>
                    <Icon as={MapPinIcon} size="xl" marginLeft={10} />
                    <Text marginRight={10}>DF</Text>
                    <Icon as={BellIcon} size="xl" />
                </View>
                <View>


                <View>
                    <Box display="flex" flexDirection="row">
                        <Image alt='image' height={130} width={130} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-MY2mAEEzds_arITwzFz7Cd3IvMq02qDiQ&s' }} />
                        <Box justifyContent="space-between" ml={4}>
                            <View flexDirection="row" alignItems="center" gap={"$9"}>
                                <Text fontWeight="bold">Armário Multiuso</Text>
                                <Text fontWeight="bold">R$ 99,99</Text>
                            </View>
                            <Text>Ceilandia - DF</Text>
                        </Box>
                    </Box>
                </View>
            </View>
        </>
    )
}