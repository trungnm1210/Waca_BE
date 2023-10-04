const {
    createUser,
    scanWallet,
    scanWalletAmdin,
    getUserById,
    getAllUser,
    getAllDeletedUsers,
    checkUserEmail,
    updateUserById,
    updateUserMoneyById,
    updateUserPasswordByEmail,
    deleteUserById,
    recoverUserById,
    loginUser,
    getAdminByAdminUsername,
    verifiedAccount,
    getListAgency,
    viewMemberAgency,
    createUserAccount,
    forgotPassAccount,
    resendConfirmationAccount,
    updateUserPasswordByEmailClient,
    updateUserPasswordByEmailClient2,
    activeUser,
    getInfoUser,
    updateInfoVerify,
    activeGoogle2FA,
    unActiveGoogle2FA,
    unActiveTelegram2FA,
    createGoogle2FA,
    reloadMoneyDemo,
    listHisBO,
    LiveToUsdt,
    UsdtToLive,
    WithDrawalNoiBo,
    WithDrawalERC,
    WithDrawalBSC,
    WithDrawalVND,
    BalanceWallet,
    BankInfo,
    DepositToWallet,
    UserBuyVIP,
    getNguoiGioiThieu,
    getBoStatistics,
    getBoStatisticsCurrentDay,
    getListHisOrder,
    getListHisOrderDate,
    getListHisTradeWallet,
    getListHisTradeWalletPage,
    getListHisTradeWalletHH,
    getListHisTradeWalletHHPage,
    getListHisTradeWalletWGD,
    getListHisTradeWalletWGDPage,
    getComDetails,
    getComDetailsPage,
    getComDetailsDate,
    getAgencySearchLevel,
    getAgencySearchName,
    loginG2FA,
    sendCodeG2FA,
    sendCodeTele2FA,
    getListAnalytics,
    WithDrawalPaypalNB,
    WithDrawalPaypalAc,
    addMoneyMember,
    changeAccType,
    changPassAd,
    getListF1F7,
    getSuperior,
    getLiveAccount,
    getListCmsHis,
    getListNotifi,
    updateListNotifi,
    active2fa,
    disable2fa,
    disable2faAdmin,
    checkOn2fa,
    check2fa,
    thongKeGetListF1F7,
    activeUserByAdmin,
    getAllLuckyReward,
    checkSpinsUser,
    luckyRewardSpinUser,
    getLuckyActive,
    getUserInfoAdmin,
    getUserTradeAnalyze,
    getUserBalanceAnalyze,
    activeTelegram2FA
} = require("./user.controller");
const router = require("express");
const app = router();
const { checkToken, checkAdminToken } = require("../../auth/token_validation");
const requestLimiter = require("../../auth/maxRequest")
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.post("/createAccount", createUserAccount);

app.post("/forgot-password", forgotPassAccount);

app.post("/resend-confirmation-email", resendConfirmationAccount);

app.patch('/change-password', updateUserPasswordByEmailClient);

app.patch('/change-password-is', updateUserPasswordByEmailClient2);

app.post("/create", checkAdminToken, createUser);

app.get("/scan-wallet", checkToken, scanWallet);

app.get("/scan-wallet-admin", checkAdminToken, scanWalletAmdin);

app.get("/thong-ke-getListF1F7", checkToken, thongKeGetListF1F7);

app.get('/getAllUser', checkAdminToken, getAllUser);

app.get('/getAllDeletedUsers', checkAdminToken, getAllDeletedUsers);

app.get('/getID/:id', checkToken, getUserById);

app.get('/checkEmail/:email', checkAdminToken, checkUserEmail);

app.patch('/updateUser', checkAdminToken, updateUserById);

app.patch('/updatePassword', checkToken, updateUserPasswordByEmail);

app.patch('/updateMoney', checkAdminToken, updateUserMoneyById);

app.delete('/deleteUserById/:id', checkAdminToken, deleteUserById);

app.delete('/recoverUserById/:id', checkAdminToken, recoverUserById);

app.post("/activeUser", activeUser);

app.post("/admin-active-user", checkAdminToken, activeUserByAdmin);

app.post("/login", loginUser);

app.post("/AdminSingIn", getAdminByAdminUsername);

app.post('/verifiedUser', checkAdminToken, verifiedAccount);

app.get('/getAgency', checkAdminToken, getListAgency);

app.get('/viewTotalMAgency/:id', checkAdminToken, viewMemberAgency)

app.get('/info', checkToken, getInfoUser)

app.get('/analytics', checkAdminToken, getListAnalytics)

app.post('/update-info', checkToken, updateInfoVerify);

app.post('/update-gg2fa', checkToken, activeGoogle2FA);

app.post('/disable-gg2fa', checkToken, unActiveGoogle2FA);

app.post('/active-tele2fa', checkToken, activeTelegram2FA);

app.post('/disable-tele2fa', checkToken, unActiveTelegram2FA);

app.get('/create-gg2fa', checkToken, createGoogle2FA);

app.put('/demo', checkToken, reloadMoneyDemo);

app.get('/listbo', checkToken, listHisBO);

app.post('/live-to-usdt', requestLimiter, checkToken, LiveToUsdt);

app.post('/usdt-to-live', requestLimiter, checkToken, UsdtToLive);

app.post('/withdrawal', requestLimiter, checkToken, WithDrawalNoiBo);

app.post('/withdrawal-erc', requestLimiter, checkToken, WithDrawalERC);

app.post('/withdrawal-bsc', requestLimiter, checkToken, WithDrawalBSC);

app.post('/withdrawal-vnd', requestLimiter, checkToken, WithDrawalVND);

app.post('/paypal/withdrawal', requestLimiter, checkToken, WithDrawalPaypalNB);

app.post('/paypal/withdrawal-acc', requestLimiter, checkToken, WithDrawalPaypalAc);

app.get('/balance-wallet', checkToken, BalanceWallet);

app.get('/bank-info', checkToken, BankInfo);

app.post('/usdt-wallet', checkToken, DepositToWallet);

app.post('/buy-vip', checkToken, UserBuyVIP);

app.get('/bo-statistics', checkToken, getBoStatistics);

app.get('/bo-statistics-current-day', checkToken, getBoStatisticsCurrentDay);

app.get('/history-order', checkToken, getListHisOrder);

app.post('/history-order-date', checkToken, getListHisOrderDate);

app.get('/history-wallet', checkToken, getListHisTradeWallet);

app.get('/history-wallet/:page', checkToken, getListHisTradeWalletPage);

app.get('/history-wallet-co', checkToken, getListHisTradeWalletHH);

app.get('/history-wallet-co/:page', checkToken, getListHisTradeWalletHHPage);

app.get('/history-wallet-trade', checkToken, getListHisTradeWalletWGD);

app.get('/history-wallet-trade/:page', checkToken, getListHisTradeWalletWGDPage);

app.get('/presenter', checkToken, getNguoiGioiThieu);

app.get('/commission-details', checkToken, getComDetails);

app.get('/commission-details/:page', checkToken, getComDetailsPage);

app.post('/commission-details-date', checkToken, getComDetailsDate);

app.post('/agency-search-lv', checkToken, getAgencySearchLevel);

app.post('/agency-search-name', checkToken, getAgencySearchName);

app.post('/addMoneyMember', checkAdminToken, addMoneyMember);

app.post('/login-2fa', loginG2FA);

app.get('/code-2fa', checkToken, sendCodeG2FA);

app.get('/code-2fa-tele', checkToken, sendCodeTele2FA);

app.post("/changeAcc", checkAdminToken, changeAccType);

app.post("/changPassAd", checkAdminToken, changPassAd);

app.post("/getListF1F7", checkToken, getListF1F7);

app.get("/getSuperior/:ref", checkAdminToken, getSuperior);

app.get("/get-live-account/:ref", checkAdminToken, getLiveAccount);

app.post("/getListCmsHis", checkAdminToken, getListCmsHis);

app.post("/getListNotifi", checkToken, getListNotifi);

app.post("/updateListNotifi", checkToken, updateListNotifi);

app.get("/lucky-reward", checkToken, getAllLuckyReward);

app.get("/check-lucky-spins", checkToken, checkSpinsUser);

app.get("/lucky-active", checkToken, getLuckyActive);

app.post("/lucky-reward-spin", checkToken, luckyRewardSpinUser);
//admin
app.post("/active-2fa", checkAdminToken, active2fa);
app.post("/disable-2fa", checkAdminToken, disable2fa);
app.post("/admin-disable-2fa", checkAdminToken, disable2faAdmin);
app.post("/check-2fa", checkAdminToken, check2fa);
app.get("/check-on-2fa", checkAdminToken, checkOn2fa);

app.get("/get-user-info-admin/:id", checkAdminToken, getUserInfoAdmin);
app.get("/get-user-trade-analyze", checkAdminToken, getUserTradeAnalyze);
app.get("/get-user-balance-analyze", checkAdminToken, getUserBalanceAnalyze);

module.exports = app;
