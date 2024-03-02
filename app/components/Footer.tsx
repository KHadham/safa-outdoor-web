import { View } from "react-native"
import React from "react"
import { ListItem, Text } from "../components"
import Icons from "@expo/vector-icons/MaterialCommunityIcons"
import { openLinkInBrowser } from "app/utils/openLinkInBrowser"
import { spacing } from "app/theme"
import { dynamicColPercentage, dynamicColWidth } from "app/utils/uiHandler"
import styles from "./styles"
import { widthByScreen } from "app/utils/dimensions"

export const Footer = () => {
  alert(widthByScreen(100))
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, minWidth: dynamicColPercentage() }}>
        <Text preset="subheading">Temui kami di</Text>
        <ListItem
          style={{ alignItems: "center" }}
          text="Instagram"
          LeftComponent={<Icons name="instagram" size={30} color={"purple"} />}
          onPress={() => openLinkInBrowser("https://instagram.com/safa_outdoors")}
        />
        <ListItem
          style={{ alignItems: "center" }}
          text="Instagram Thrift"
          LeftComponent={<Icons name="instagram" size={30} color={"maroon"} />}
          onPress={() => openLinkInBrowser("https://www.instagram.com/safa_thrift/")}
        />
        <ListItem
          style={{ alignItems: "center" }}
          text="YouTube"
          LeftComponent={<Icons name="youtube" size={30} color={"red"} />}
          onPress={() => openLinkInBrowser("https://www.youtube.com/@SafaOutdoorYT")}
        />
        <ListItem
          style={{ alignItems: "center" }}
          text="WhatsApp"
          LeftComponent={<Icons name="whatsapp" size={30} color={"green"} />}
          onPress={() => openLinkInBrowser("https://wa.me/6281910859555")}
        />
        <ListItem
          style={{ alignItems: "center" }}
          text="Google Maps"
          LeftComponent={<Icons name="google-maps" size={30} color={"brown"} />}
          onPress={() => openLinkInBrowser("https://maps.app.goo.gl/w7HKhVmgm6cryizC7")}
        />
      </View>

      <View
        style={{
          gap: spacing.md,
          flex: 1,
          minWidth: dynamicColPercentage(),
        }}
      >
        <Text preset="subheading">Mengenal lebih dekat</Text>
        <Text preset="default">Crew</Text>
        <Text preset="default">Galeri</Text>
        <Text preset="default">Komentar</Text>
        <Text preset="default">Kegiatan</Text>
        <Text preset="default">Testimoni</Text>
      </View>
      <View
        style={{
          gap: spacing.md,
          flex: 1,
          minWidth: dynamicColPercentage(),
        }}
      >
        <Text preset="subheading">Layanan</Text>
        <Text preset="default">Servis</Text>
        <Text preset="default">Sewa</Text>
        <Text preset="default">Cuci</Text>
        <Text preset="default">Porter</Text>
        <Text preset="default">Guide</Text>
        <Text preset="default">Travel</Text>
        <Text preset="default">Open/Privat Trip</Text>
      </View>
      <View
        style={{
          gap: spacing.md,
          flex: 1,
          minWidth: dynamicColPercentage(),
          //   maxWidth: "100%",
        }}
      >
        <Text preset="subheading">Alamat</Text>
        <Text preset="default">
          Jl. Raya Bogor No.KM.28 No.34, RT.3/RW.2, Pekayon, Jakarta, Kota Jakarta Timur, Daerah
          Khusus Ibukota Jakarta 13710
        </Text>

        <Text preset="subheading">Info B2B (sesama pelaku usaha)</Text>
        <ListItem
          style={{ alignItems: "center", gap: spacing.md }}
          text="Linked In"
          LeftComponent={<Icons name="linkedin" size={30} color={"blue"} />}
          onPress={() => openLinkInBrowser("https://www.linkedin.com/in/kh-adham/")}
        />

        <Text preset="subheading">Franchise</Text>
        <Text preset="default" style={{}}>
          Coming soon, Pantau terus web dan sosmed kami untuk terus update sama berita terbaru
        </Text>
      </View>
    </View>
  )
}
