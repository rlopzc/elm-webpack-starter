module View.Page exposing (ActivePage(..), layout)

import Html exposing (..)
import Route exposing (Route)
import Html.Attributes exposing (id, class, href, placeholder, attribute, type_, classList)


type ActivePage
    = Other
    | Home
    | About


{-| Take a page's Html and layout it with a header and footer.
isLoading can be used to slow loading during slow transitions
-}
layout : Bool -> ActivePage -> Html msg -> Html msg
layout isLoading page content =
    div []
        [ viewHeader page
        , div [ class "container-fluid" ]
            [ content ]
        , viewFooter
        ]


viewHeader : ActivePage -> Html msg
viewHeader page =
    let
        linkTo =
            navbarLink page
    in
        nav [ class "navbar navbar-expand-lg navbar-light bg-light" ]
            [ a [ class "navbar-brand", Route.href Route.Home ]
                [ text "Elm" ]
            , button [ attribute "aria-controls" "navbarSupportedContent", attribute "aria-expanded" "false", attribute "aria-label" "Toggle navigation", class "navbar-toggler", attribute "data-target" "#navbarSupportedContent", attribute "data-toggle" "collapse", type_ "button" ]
                [ span [ class "navbar-toggler-icon" ]
                    []
                ]
            , div [ class "collapse navbar-collapse", id "navbarSupportedContent" ]
                [ ul [ class "navbar-nav ml-auto" ]
                    [ linkTo Route.Home [ text "Home" ]
                    , linkTo Route.About [ text "About" ]
                    ]
                ]
            ]


navbarLink : ActivePage -> Route -> List (Html msg) -> Html msg
navbarLink page route linkContent =
    li [ class "nav-item", classList [ ( "active", isActive page route ) ] ]
        [ a [ class "nav-link", Route.href route ] linkContent ]


isActive : ActivePage -> Route -> Bool
isActive page route =
    case ( page, route ) of
        ( Home, Route.Home ) ->
            True

        ( About, Route.About ) ->
            True

        _ ->
            False


viewFooter : Html msg
viewFooter =
    footer []
        [ div [] []
        ]
