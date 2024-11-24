import {Colors} from './Colors'
import fonts from './fonts'; // Import the fonts object

// define space grid
// /////////////////////////////////////////////////////////////////////////////
const spaceGrid = 8;
const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space8 = spaceGrid * 8;
const space12 = spaceGrid * 12;
const space16 = spaceGrid * 16;

const gStyle = {
    activeOpacity: 0.7,

    // containers
    // ///////////////////////////////////////////////////////////////////////////
    container: {
        backgroundColor: Colors.bgRose,
        flex: 1
    },
    videoContainer: {
        backgroundColor: Colors.headerBarBg,
        padding: 12,
        borderRadius: 16,
        fontSize: 14,
        height: 260
    },
    innButton: {
        fontSize: 16,
        color: Colors.bgRed
    },
    contactButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.bgRed,
        borderRadius: 16,
        borderWidth: 2,
        width: '92%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        marginTop: 12,
        backgroundColor: Colors.bgRose,
        paddingVertical: 12,
        paddingHorizontal: 8
    },
    modalButton: {
        justifyContent: 'center',
        borderRadius: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        marginTop: 12,
        backgroundColor: Colors.redBaseDark,
        paddingHorizontal: 6
    },
    mainButton: {
        borderRadius: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        marginTop: 12,
        backgroundColor: Colors.bgRed,
        paddingHorizontal: 6
    },
    videoText: {
        fontSize: 18,
        width: '92%',
        color: Colors.bgRed,
        paddingVertical: 12,
        textAlign: 'center'
    },
    // flex
    // ///////////////////////////////////////////////////////////////////////////
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },

    flexAlignCenter: {
        alignItems: 'center'
    },
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexCenterAll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexRowAlignCenter: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    flexRowCenter: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    flexRowSpace: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // margin
    // ///////////////////////////////////////////////////////////////////////////
    mB1: { marginBottom: space1 },
    mB2: { marginBottom: space2 },
    mH1: { marginHorizontal: space1 },
    mH2: { marginHorizontal: space2 },
    mL1: { marginLeft: space1 },
    mL2: { marginLeft: space2 },
    mR1: { marginRight: space1 },
    mR2: { marginRight: space2 },
    mT1: { marginTop: space1 },
    mT2: { marginTop: space2 },
    mTHalf: { marginTop: spaceHalf },
    mV1: { marginVertical: space1 },
    mV2: { marginVertical: space2 },

    // padding
    // ///////////////////////////////////////////////////////////////////////////
    pB1: { paddingBottom: space1 },
    pB2: { paddingBottom: space2 },
    pHHalf: { paddingHorizontal: spaceHalf },
    pH1: { paddingHorizontal: space1 },
    pH2: { paddingHorizontal: space2 },
    pL1: { paddingLeft: space1 },
    pL2: { paddingLeft: space2 },
    pR1: { paddingRight: space1 },
    pR2: { paddingRight: space2 },
    pT1: { paddingTop: space1 },
    pT2: { paddingTop: space2 },
    pTHalf: { paddingTop: spaceHalf },
    pV1: { paddingVertical: space1 },
    pV2: { paddingVertical: space2 },

    // spacers
    // ///////////////////////////////////////////////////////////////////////////
    spacer1: { height: space1 },
    spacer2: { height: space2 },
    spacer3: { height: space3 },
    spacer4: { height: space4 },
    spacer8: { height: space8 },
    spacer12: { height: space12 },
    spacer16: { height: space16 },

    // text
    // ///////////////////////////////////////////////////////////////////////////
    heading: {
        color: Colors.heading,
        fontFamily: fonts.medium,
        fontSize: 22,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 16
    },
    headingText: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 12,
        textAlign: 'center'
    },
    FAQMain: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: Colors.bgRed,
        alignSelf: 'center',
        borderRadius: 16,
        marginVertical: 8
    },
    FAQText: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: Colors.white
    },
    mainBanner: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center'
    },
    input: {
        borderRadius: 16,
        borderWidth: 2,
        height: 50,
        margin: 12,
        padding: 10
    },
    productBox: {
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    leftProductBox: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    centerProductBox: {
        alignItems: 'flex-start',
        flex: 6,
        justifyContent: 'center',
        paddingHorizontal: 2
    },
    icon: {
        alignItems: 'center',
        borderRadius: 10000,
        borderWidth: 1,
        justifyContent: 'center'
    },
    // modal
    textModalClose: {
        color: Colors.lightColor,
        fontSize: 20,
        marginHorizontal: 'auto',
        marginVertical: 10,
        textAlign: 'center'
    },
    textModal: {
        color: Colors.lightColor,
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    textMainModal: {
        color: Colors.black,
        fontSize: 13,
        margin: 10
    },
    warning_body: {
        height: 200
    },
    centered_view: {
        alignItems: 'center',
        backgroundColor: '#00000099',
        flex: 1,
        justifyContent: 'center'
    },
    warning_modal: {
        backgroundColor: Colors.lightColor,
        borderColor: Colors.mainColor,
        borderRadius: 16,
        borderWidth: 1,
        height: 300,
        width: 300
    },
    warning_title: {
        alignItems: 'center',
        backgroundColor: Colors.redBaseDark,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 50,
        justifyContent: 'center',
        position: 'relative',
        top: -1
    },
    warning_button: {
        backgroundColor: Colors.inactiveGrey,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        bottom: -1,
        height: 50,
        justifyContent: 'center',
        position: 'relative'
    },
    // end modal
    FAQInn: {
        color: Colors.bgRose,
        marginBottom: 12,
        textAlign: 'center'
    },
    containerHeading: {
        borderBottomColor: Colors.moreSectionBorder,
        borderBottomWidth: 1,
        paddingHorizontal: 8,
        paddingTop: 8,
        paddingBottom: 4
    },
    containerBorder: {
        borderBottomColor: Colors.moreSectionBorder,
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    containerResultWithOut: {
        paddingHorizontal: 8,
        paddingBottom: 4,
        marginTop: 16
    },
    containerResult: {
        borderBottomColor: Colors.moreSectionBorder,
        borderBottomWidth: 1,
        paddingHorizontal: 8,
        paddingBottom: 4,
        marginTop: 16
    },
    mainTitleNewBold: {
        marginTop: 16,
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    mainTitleNewBoldTwo: {
        paddingHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    mainTitleNew: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 16
    },
    headingTextResult: {
        color: Colors.black,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 12,
        textAlign: 'center'
    },
    headingTextSource: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        fontSize: 16,
        textAlign: 'center'
    },
    headingTextBlack: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 16,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 12,
        textAlign: 'center'
    },
    headingTextLeft: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 12,
        textAlign: 'left'
    },
    bigText: {
        color: Colors.black,
        fontFamily: fonts.medium,
        fontSize: 16
    },
    homeTextBlack: {
        color: Colors.black50,
        fontFamily: fonts.bold,
        paddingHorizontal: 14,
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 4
    },
    homeTextSimple: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        fontSize: 14,
        textAlign: 'center'
    },
    homeText: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 14,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 12,
    },
    Border:{
        borderBottomColor: Colors.moreSectionBorder,
        borderBottomWidth: 1,
        marginBottom: 8
    },
    FAQTextAnswer: {
        color: Colors.black50,
        fontFamily: fonts.medium,
        paddingHorizontal: 14,
        fontSize: 14,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 4,
        textAlign: 'justify'
    },
    scoreTitleText: {
        color: Colors.headerBarBg,
        paddingVertical: 14,
        marginTop: 12,
        fontWeight: 'bold'
    },
    homeTextBold: {
        color: Colors.black,
        fontFamily: fonts.medium,
        fontWeight: 'bold'
    },
    imgHome: {
        marginTop: 32,
        width: 200,
        height: 200
    },
    USCDCLogo: {
        resizeMode: 'contain'
    },
    imgBabyTest: {
        resizeMode: 'contain',
        marginVertical: 6,
        zIndex: 888
    },
    imgBaby: {
        height: 200,
        resizeMode: 'contain',
        width: 144,
        marginVertical: 8
    },
    imgIcon: {
        height: 80,
        resizeMode: 'contain',
        width: 80
    },
    buttonDownGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        width: '100%'
    },
    buttonDown: {
        alignItems: 'center',
        borderColor: Colors.bgRed,
        borderRadius: 16,
        borderWidth: 2,
        height: 50,
        justifyContent: 'center',
        width: 60
    },
    // nav tab
    // ///////////////////////////////////////////////////////////////////////////
    navTabStyle: {
        backgroundColor: Colors.bgRed,
        borderTopColor: Colors.bgRed
    }
}

export default gStyle;
