####  AmityEko Delivery Service 

### Folder Structure 

# 1. assets/
This folder will store all the assets that we are using in this project. We can add static files like fonts and images to it. Also, we can add more assets like videos in this folder according to your project requirements.

# 2. components/
In the components folder, we can create multiple component files that are used to wrap the application components.We can divide components based on categories: atoms, organisms, molecules & templates.

(1) atoms- The smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts can be stored in the atoms folder.
(2) molecules- They are the composition of one or more components of atoms.
(3) organisms- The combination of molecules that work together or even with atoms that compose more elaborate interfaces.
(4) templates- The collection of organisms that will make a full-page template.
(5) pages - Pages

# 3. containers/
We can put all screen-based components inside containers, such as Splash Screen, Home Screen, bottom Tabs, Sidebar, common header, and the container-based files, etc.

# 4. screens/
If we have multiple screens like auth screens: login, register and profile screens, product screens it can be saved here.

# 5. i18n/
This holds translation files for different languages in which we’re using your application.

# 6. navigation/
Your project base navigation goes here. We can create a stack navigator in it and export it to your application.

# 7. stores/
We are using Redux and Redux-Sagas in our project and handle business logic using them. If we are using Redux, then there must be action, reducers, saga, and services files that can be put here.
In stores, we can create an actions folder and we can store different types of actions in this folder. We can do the same as reducer, saga, and for services.

(1) constants
This folder contains files which contain static values used within the feature.

(2) actions
We can store different types of actions in this folder. The action folder contains all the calling action creators for this feature according to our project requirement.

(3) reducers
Our application’s navigation data now takes a slice of the application state, we would need a reducer to properly update this sliced data based on triggered actions.

(4) services
The service folder contains logic, related to external API communications.

(5) interfaces
The interfaces folder contains interfaces which are used in actions and reducers.

# 8. utils/
All the utils/helpers files go here that storing reusable methods and logic like validations, progress bar, date pickers, and according to your app requirements.

# 9. hooks/
If we have custom hooks defined in our project we can put it over here that can be shared across our entire project.

# 10. styles/
We can add universal styles here like flexDirection: row, centerAll, itemsEnd and container-like equally spacing from all directions and many more. Here we place the explore feature’s components related styles.

# 11. theme/
fonts- It contains global fonts like font size, font type, and font-weight. Whenever we come across situations where we need to use the same size of fonts and the same font family, we have to create a theme/font.
