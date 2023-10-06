import { View } from "react-native";
import getStyleObj from "./style";

const ConverterScreen:React.FC = () => {
    const styles = getStyleObj();
    return(
        <View style={styles.mainContainer}></View>
    );
}

export default ConverterScreen;