 
 const Header=()=>{

    <View
          style={{
            justifyContent: "flex-end",
            paddingBottom: normalize(15),
            alignItems: "center",
          }}
        >
          <Arrow />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "flex-end",
              paddingBottom: normalize(9),
            }}
          >
            <Heart />
          </View>
          <View
            style={{
              paddingLeft: normalize(17),
              justifyContent: "flex-end",
              paddingBottom: normalize(9),
            }}
          >
            <Notification />
          </View>
        </View>
 }
 