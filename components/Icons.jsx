import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function HomeIcon(props) {
    return <Feather name="home" size={24} color="black" {...props} />
}

export function CalendarIcon(props) {
    return <Feather name="calendar" size={24} color="black" {...props} />
}

export function UsersIcon(props) {
    return <Feather name="users" size={24} color="black" {...props} />
}

export function ServicesIcon(props) {
    return <MaterialIcons name="miscellaneous-services" size={24} color="black" {...props} />
}

export function UserIcon(props) {
    return <Feather name="user" size={24} color="black" {...props} />
}