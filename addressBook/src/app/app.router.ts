import { Routes } from '@angular/router';

import { CollectionComponent } from './collection';
import { DetailComponent } from './detail';
import { EditComponent } from './edit';
import { ListComponent } from './list';

export const rootRouterConfig: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'list/:id',
        component: DetailComponent
    },
    {
        path: 'edit',
        component: EditComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'collection',
        component: CollectionComponent
    }
];