import { AddIcon,  ButtonText, GlobeIcon, Icon, Menu, MenuItem, MenuItemLabel } from "@gluestack-ui/themed";
import { MenuIcon, PaintBucket, PuzzleIcon, SettingsIcon } from "lucide-react-native";

export default function MenuButton() {
    return (
        <>
            <Menu
                placement="bottom"
                trigger={({ ...triggerProps }) => {
                    return (
                        < >
                           <Icon as={MenuIcon} size="xl" m="$2" w="$6" h="$6" {...triggerProps} />
                        </>
                    )
                }}
            >
                <MenuItem key="Configuracoes" textValue="Configurações">
                    <Icon as={SettingsIcon} size="sm" mr="$2" />
                    <MenuItemLabel size="sm">Configurações</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Criar Conta" textValue="Criar Conta">
                    <Icon as={AddIcon} size="sm" mr="$2" />
                    <MenuItemLabel size="sm">Criar Conta</MenuItemLabel>
                </MenuItem>
            </Menu></>
    )
}