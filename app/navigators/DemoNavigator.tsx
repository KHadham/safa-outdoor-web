import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, useNavigation } from "@react-navigation/native"
import React, { useEffect, useRef, useState } from "react"
import {
  TextStyle,
  View,
  ViewStyle,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AutoImage, Button, Text } from "../components"
import { translate } from "../i18n"
import { DemoCommunityScreen, DemoShowroomScreen, DemoDebugScreen, EventScreen } from "../screens"
import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Modal from "react-native-modal"
import Icons from "@expo/vector-icons/MaterialCommunityIcons"
import { resetRoot } from "./navigationUtilities"

export type TabNavParams = {
  Beranda: undefined
  Sewa: undefined
  Belanja: undefined
  Event: { queryIndex?: string; itemIndex?: string }
  Kontak: undefined
  Akun: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabNavParams> = CompositeScreenProps<
  BottomTabScreenProps<TabNavParams, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createMaterialTopTabNavigator<TabNavParams>()
const windowDimensions = Dimensions.get("window")
const screenDimensions = Dimensions.get("screen")

const CustomTabBar = ({ state, descriptors, navigation, dimension, onDrawerPress }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  const { navigate } = useNavigation()
  const [isDrawerOpen, setisDrawerOpen] = useState(false)

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  const tabItem = () => {
    const newRouteState = state.routes.slice(1)
    return newRouteState.map((route, index) => {
      index = index + 1
      const { options } = descriptors[route.key]

      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name

      const isFocused = state.index === index

      const onPress = () => {
        setisDrawerOpen(false)
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
          navigate(route.name)
        }
      }

      const onLongPress = () => {
        navigation.emit({
          type: "tabLongPress",
          target: route.key,
        })
      }

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          key={route.name}
        >
          <Text style={{ color: isFocused ? colors.error : colors.border }}>{label}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          paddingHorizontal: spacing.md,
          gap: spacing.md,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Beranda")}
          // onPress={() => resetRoot({ index: 0, routes: [] })}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <AutoImage
            maxWidth={180}
            style={{
              resizeMode: "center",
              height: 80,
              width: 150,
              flex: 1,
              maxWidth: 180,
            }}
            resizeMode="center"
            source={require("assets/images/logo-safa-long.png")}
          />
        </TouchableOpacity>
        {dimension.window.width > 1000 ? (
          <View style={{ flexDirection: "row", gap: spacing.md, alignItems: "center" }}>
            {tabItem()}
          </View>
        ) : (
          <Icons
            onPress={() => setisDrawerOpen(true)}
            name={"menu"}
            size={30}
            color={colors.border}
          />
        )}
      </View>
      <Modal
        useNativeDriver
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
        isVisible={isDrawerOpen}
        onBackdropPress={() => setisDrawerOpen(false)}
        backdropOpacity={0.5}
        backdropColor="black"
        style={{
          alignItems: "flex-end",
          margin: 0,
        }}
      >
        <View
          style={{
            zIndex: 10,
            margin: 0,
            backgroundColor: colors.background,
            width: "20%",
            flex: 1,
            minWidth: 150,
            height: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("Beranda")}
            // onPress={() => resetRoot({ index: 0, routes: [] })}
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
              alignContent: "flex-start",
              justifyContent: "flex-start",
              padding: spacing.md,
            }}
          >
            <AutoImage
              maxWidth={180}
              style={{
                resizeMode: "center",
                height: 80,
                width: 150,
                flex: 1,
                maxWidth: 180,
              }}
              resizeMode="center"
              source={require("assets/images/logo-safa-long.png")}
            />
          </TouchableOpacity>
          {tabItem()}
          <Button
            text="Logout"
            RightAccessory={() => (
              <Icons
                onPress={() => setisDrawerOpen(true)}
                name={"logout"}
                size={30}
                color={colors.border}
              />
            )}
          ></Button>
        </View>
      </Modal>
    </>
  )
}

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window, screen }) => {
      setDimensions({ window, screen })
    })
    return () => subscription?.remove()
  })

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
      tabBar={(props) => <CustomTabBar {...props} dimension={dimensions} />}
    >
      <Tab.Screen name="Beranda" component={DemoShowroomScreen} />
      <Tab.Screen
        name="Sewa"
        component={() => {
          return <View></View>
        }}
      />
      <Tab.Screen name="Belanja" component={DemoShowroomScreen} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="Kontak" component={DemoPodcastListScreen} />
      <Tab.Screen name="Akun" component={DemoDebugScreen} />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: "white",
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
