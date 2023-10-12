// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import Home from "@app/screens/PlayerDashboard/Home";
// import Calendar from "@app/screens/PlayerDashboard/Calendar/Calendar";
// import UpcomingEvents from "@app/screens/PlayerDashboard/UpcomingEvents";
// import TournamentsLeague from "@app/screens/PlayerDashboard/TournamentsLeague";
// import Result from "@app/screens/PlayerDashboard/Results";
// import MatchBooked from "@app/screens/PlayerDashboard/MatchBooked";
import Favourite from "@app/screens/PlayerDashboard/Favourite";
// import Filter from "@app/components/Filter";
import UpcomingFilter from "@app/screens/PlayerDashboard/UpcomingFilter";
import TournamentFilter from "@app/screens/PlayerDashboard/TournamentFilter";

// import Tournaments from "@app/screens/TournamentsLeague";

// import Home from "@app/screens/Home";
// import Calendar from "@app/screens/Calendar/Calendar";
// import Playerpersonaldetails from "@app/screens/Playerregistration/Playerpersonaldetails";
// import Primaryinformation from "@app/screens/Playerregistration/Primaryinformation";
// import Playeradress from "@app/screens/Playerregistration/playeradress";
// import Relaibility from "@app/screens/Playerregistration/Releaseandrelaibility";
import Playermobileotp from "@app/screens/AuthenticationScreens/PlayerRegistration/Playermobileotp";
import Playeremailotp from "@app/screens/AuthenticationScreens/PlayerRegistration/Playeremailotp";
// import Preview from "@app/screens/Playerregistration/Preview";
import Loginscreen from "@app/screens/Login";
// import Editplayerpersonaldetails from "@app/screens/Playerregistration/Editplayerpersonaldetails";
// import Editemergencycontact from "@app/screens/Playerregistration/Editemergencycontact";
// import Primarydetails from "@app/screens/Playerregistration/Primarydetails";
// import Playerfindtournament from "@app/screens/Playerregistration/Playerfindtournament";
import Signupscreen from "@app/screens/AuthenticationScreens/Signupscreen";
// import Emergencycontactdetails from "@app/screens/Emergencycontactdetails";
import Basicprofile from "@app/screens/Profile/Basicprofile";
import Editprofile from "@app/screens/Profile/Editprofile";
import Editemail from "@app/screens/Profile/Editemail";
import ResetLoginPin from "@app/screens/Profile/ResetLoginPin";
import Transactions from "@app/screens/Walletes/Transactions";
import Selectpayment from "@app/screens/checkout/SelectPayment";
import Playerpayment from "@app/screens/checkout/Playerpayment";
import Accountdetails from "@app/screens/checkout/Accountdetails";
import SuccessScreen from "@app/screens/checkout/SuccessScreen";
// import Coachpersonaldetails from "@app/screens/CoachRegistration/Coachpersonaldetails";
// import Coachaddress from "@app/screens/CoachRegistration/Coachaddress";
// import Coachprofessionalexeperience from "@app/screens/CoachRegistration/Coachprofessionalexperience";
// import Coachpreview from "@app/screens/CoachRegistration/Coachpreview";
// import Coachededitpersonaldetails from "@app/screens/CoachRegistration/Coacheditpersonaldetails";
import registration from "@app/screens/AuthenticationScreens/CoachRegistration";
import StackAuthCoach from "@app/navigations/StackAuthCoach";
import StackAuthPlayer from "@app/navigations/StackAuthPlayer";
import TabCoachDash from "./TabCoachDash";
import TabPlayerDash from "./TabPlayerDash";
import ResetPin from "@app/screens/Login/ForgetPass/ResetPin";
import CheckMailScreen from "@app/screens/Login/ForgetPass/CheckMailScreen";
import Playerfindtournament1 from "@app/screens/AuthenticationScreens/PlayerRegistration/Playerfindtournament1";
import UpcomingEventTrack from "@app/screens/PlayerDashboard/UpcomingEventTrack";
// import CoachDashboard from "@app/screens/CoachRegistration/CoachDashboard";
// import AddEventModal from "@app/screens/CoachRegistration/AddEventModal";
// import CoachDashboard from "@app/screens/CoachRegistration/CoachDashboard";
// import AddEventModal from "@app/screens/CoachRegistration/AddEventModal";
import Clubdetails from "@app/screens/AuthenticationScreens/ClubRegistration/Clubdetails";
import Players from "@app/screens/ClubDashboard/ClubPlayers/Players";
import TabClubDash from "./TabClubDash";
import Clubpreview from "@app/screens/AuthenticationScreens/ClubRegistration/Clubpreview";
import Editclubdetails from "@app/screens/AuthenticationScreens/ClubRegistration/Editclubdetails";
import Clubinformation from "@app/screens/AuthenticationScreens/ClubRegistration/Clubinformation";
import Clubadditionalinformation from "@app/screens/AuthenticationScreens/ClubRegistration/Clubinformation";
import Clubterms from "@app/screens/AuthenticationScreens/ClubRegistration/Clubtermsandconditions";
import Editclubadditionalinfo from "@app/screens/AuthenticationScreens/ClubRegistration/Editclubadditionaalinfo";
import Packages from "@app/screens/AuthenticationScreens/SponsorRegisstration/Packages";
import PackagesDetail from "@app/screens/AuthenticationScreens/SponsorRegisstration/PackagesDetail";
import StackAuthClub from "./StackAuthClub";
import StackAuthSponser from "./StackAuthSponser";
import clubTournament from "@app/screens/ClubDashboard/ClubTournaments";
import Splashscreen from "@app/screens/Splashscreen";
import Stripepayment from "@app/screens/checkout/Stripepayment";
import CoachAddNewMatch from "@app/screens/CoachDashboard/CoachAddNewMatch";
import CoachUploadResults from "@app/screens/CoachDashboard/CoachUploadResults";
import CoachUploadNewResults from "@app/screens/CoachDashboard/CoachUploadNewResults";

// import BottomController from "./BottomController";


const MainController = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec,
                },
            }}
            initialRouteName={Navigations.splashscreen}>
            <Stack.Screen name={Navigations.loginscreen} component={Loginscreen} />
            <Stack.Screen name={Navigations.splashscreen} component={Splashscreen}/>
            <Stack.Screen name={Navigations.signupscreen} component={Signupscreen} />
            <Stack.Screen name={Navigations.resetPin} component={ResetPin} />
            <Stack.Screen name={Navigations.stackAuthCoach} component={StackAuthCoach} />
            <Stack.Screen name={Navigations.stackAuthPlayer} component={StackAuthPlayer} />
            <Stack.Screen name={Navigations.stackAuthClub} component={StackAuthClub} />
            <Stack.Screen name={Navigations.tabCoachDash} component={TabCoachDash} />
            <Stack.Screen name={Navigations.tabPlayerDash} component={TabPlayerDash} />
            <Stack.Screen name={Navigations.tabClubDash} component={TabClubDash} />
            <Stack.Screen name={Navigations.home} component={Home} />
            <Stack.Screen name={Navigations.checkMailScreen} component={CheckMailScreen} />
            <Stack.Screen name={Navigations.upcomingFilter} component={UpcomingFilter} />
            <Stack.Screen name={Navigations.tournamentFilter} component={TournamentFilter} />
            <Stack.Screen name={Navigations.favourite} component={Favourite} />
            <Stack.Screen name={Navigations.upcomingEventTrack} component={UpcomingEventTrack} />
            <Stack.Screen name={Navigations.packages} component={Packages} />
            <Stack.Screen name={Navigations.packagesDetail} component={PackagesDetail} />
            <Stack.Screen name={Navigations.playermobileotp} component={Playermobileotp} />
            <Stack.Screen name={Navigations.playeremailotp} component={Playeremailotp} />
            <Stack.Screen name={Navigations.basicProfile} component={Basicprofile} />
            <Stack.Screen name={Navigations.editProfile} component={Editprofile} />
            <Stack.Screen name={Navigations.editEmail} component={Editemail} />
            <Stack.Screen name={Navigations.resetLoginPin} component={ResetLoginPin} />
            <Stack.Screen name={Navigations.transaction} component={Transactions} />
            <Stack.Screen name={Navigations.selectPayment} component={Selectpayment} />
            <Stack.Screen name={Navigations.playerpayment} component={Playerpayment} />
            <Stack.Screen name={Navigations.accountDetail} component={Accountdetails} />
            <Stack.Screen name={Navigations.successScreen} component={SuccessScreen} />
            <Stack.Screen name={Navigations.playerfindtournament1} component={Playerfindtournament1} />
            <Stack.Screen name={Navigations.players} component={Players} />
            <Stack.Screen name={Navigations.stackAuthSponser} component={StackAuthSponser} />
            <Stack.Screen name={Navigations.stripepayment} component={Stripepayment} />
            <Stack.Screen name={Navigations.coachaddnewmatch} component={CoachAddNewMatch} />
            <Stack.Screen name={Navigations.coachuploadresults} component={CoachUploadResults} />
            <Stack.Screen name={Navigations.coachuploadnewresults} component={CoachUploadNewResults} />
          
            {/* <Stack.Screen name={Navigations.clubTournament} component={clubTournament} /> */}
        </Stack.Navigator>
    )
}
export default MainController;