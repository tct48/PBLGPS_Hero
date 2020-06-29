import { AuthURL } from './authentication.url';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ContentComponent } from './components/resource/content/content.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { InformationComponent } from './components/information/information.component';
import { ManageResourceComponent } from './components/manage-resource/manage-resource.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AppURL } from '../app.url';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { ClassroomComponent } from './components/member/classroom/classroom.component';
import { AttendenceComponent } from './components/member/attendence/attendence.component';
import { PrpsQuizComponent } from './components/quiz/prps-quiz/prps-quiz.component';
import { ExercisePrpsComponent } from './components/exercise/exercise-prps/exercise-prps.component';
import { DynamicFormComponent } from './components/quiz/dynamic-form/dynamic-form.component';
import { GuildComponent } from './components/member/guild/guild.component';
import { CreateComponent } from './components/member/guild/create/create.component';
import { StageComponent } from './components/stage/stage.component';
import { ExerciseStageComponent } from './components/exercise/exercise-stage/exercise-stage.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuizgameComponent } from './components/quizgame/quizgame.component';
import { GuideComponent } from './components/guide/guide.component';
import { UserRoleGuard } from '../guard/user-role.guard';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AuthURL.Home, component: HomeComponent },
    { path: AuthURL.Leaderboard, component: LeaderboardComponent , canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.Information, component: InformationComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.Resource, component: ResourceComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.Content, component: ContentComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.Member, component: MemberComponent, canActivate: [UserRoleGuard], data:{roles:['admin']} },
    { path: AuthURL.Quiz, component: QuizComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.ManageResource, component: ManageResourceComponent, canActivate: [UserRoleGuard], data:{roles:['admin']} },
    { path : AuthURL.Exercise, component: ExerciseComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.Menu, component: SubMenuComponent, canActivate: [UserRoleGuard], data:{roles:['admin']} },
    { path: AuthURL.Classroom, component: ClassroomComponent, canActivate: [UserRoleGuard], data:{roles:['admin']} },
    { path: AuthURL.Attendence, component: AttendenceComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.QuizPrPs, component:  PrpsQuizComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.ExercisePrps, component: ExercisePrpsComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path: AuthURL.Guild,component:GuildComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.CreateGroup, component:CreateComponent, canActivate: [UserRoleGuard], data:{roles:['admin']} },
    { path: AuthURL.Stage, component:StageComponent , canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.ExerciseStage, component:ExerciseStageComponent , canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path:AuthURL.Quest, component:QuestComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} },
    { path:AuthURL.QuizGame, component:QuizgameComponent , canActivate: [UserRoleGuard], data:{roles:['student','admin']}},
    { path: AuthURL.Guide, component:GuideComponent, canActivate: [UserRoleGuard], data:{roles:['student','admin']} }
    // { path: AuthURL.Signin , component:SigninComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
