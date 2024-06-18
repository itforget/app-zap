import { View, Icon, SearchIcon, Input, InputField, BellIcon } from "@gluestack-ui/themed";
import MenuButton from "./components/MenuButton";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { PinIcon } from "lucide-react-native";

export default function Main() {
    return (
        <>
            <View flex={1} bg="#ffffff">
                <View borderBottomWidth={1} borderColor="#223FC0" padding={15} flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Input width={300} variant="rounded">
                        <InputSlot>
                            <InputIcon as={SearchIcon} />
                        </InputSlot>
                        <InputField placeholder="Busca" />
                    </Input>
                    <Icon as={PinIcon} size="xl" m="$2" w="$6" h="$6" />
                    <Icon as={BellIcon} size="xl" m="$2" w="$6" h="$6" />
                </View>
            </View>
        </>
    )
}