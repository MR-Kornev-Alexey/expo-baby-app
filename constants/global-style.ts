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

    // ///////////////////////////////////////////////////////////////////////////
    // simple
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20,
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        flex:1,
        paddingTop: 20,
        marginTop: 30,
        paddingHorizontal: 12,
    },
    headerButton: {
        padding: 0,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
        padding:20
    },
    helper: {
        marginTop: 20,
    },
    helpButton: {
        position: 'absolute',
        top: 20,
        right: 90,
        zIndex: 99999,
        cursor: "pointer"
    },
    card: {
        marginHorizontal: 20,
        marginTop: 30,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    // containers
    // ///////////////////////////////////////////////////////////////////////////
    container: {
        flex: 1
    },
    videoContainer: {
        padding: 12,
        borderRadius: 16,
        fontSize: 14,
        height: 260
    },
    innButton: {
        fontSize: 16,
    },
    contactButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 16,
        borderWidth: 2,
        width: '92%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        marginTop: 12,
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
        paddingHorizontal: 6
    },
    mainButton: {
        borderRadius: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        marginTop: 12,
        paddingHorizontal: 6
    },
    videoText: {
        fontSize: 18,
        width: '92%',
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
        fontFamily: fonts.medium,
        fontSize: 22,
        marginBottom: 4,
        marginLeft: 4,
        marginTop: 16
    },
    headingText: {
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
        alignSelf: 'center',
        borderRadius: 16,
        marginVertical: 8
    },
    FAQText: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 16,
    },
    mainBanner: {
        fontSize: 32,
        fontWeight: 'bold',
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
        fontSize: 20,
        marginHorizontal: 'auto',
        marginVertical: 10,
        textAlign: 'center'
    },
    textModal: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    textMainModal: {
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
        borderRadius: 16,
        borderWidth: 1,
        height: 300,
        width: 300
    },
    warning_title: {
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 50,
        justifyContent: 'center',
        position: 'relative',
        top: -1
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
}

export default gStyle;
