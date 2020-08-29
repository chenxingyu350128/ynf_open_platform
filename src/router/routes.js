const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        meta: {
          auth: false
        }
      },
      {
        path: "personalCenter",
        component: () => import("pages/PersonalCenter.vue"),
        meta: {
          auth: false
        }
      },
      {
        path: "dataCenter",
        component: () => import("pages/DataCenter.vue"),
        meta: {
          auth: false
        }
      },
      {
        path: "document",
        component: () => import("pages/Document.vue"),
        meta: {
          auth: true
        }
      },
      {
        path: "feedback",
        component: () => import("pages/Feedback.vue"),
        meta: {
          auth: false
        }
      },
      {
        path: "signPage",
        component: () => import("pages/SignPage.vue"),
        meta: {
          auth: false
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
