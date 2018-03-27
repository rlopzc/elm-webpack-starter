module Route exposing (Route(..), href, modifyUrl, fromLocation)

import UrlParser as Url exposing (parseHash, s, (</>), string, oneOf, Parser)
import Html exposing (Attribute)
import Html.Attributes as Attr
import Navigation exposing (Location)


-- ROUTING --


type Route
    = Home
    | About



--    When needing parameters on the form base/item/id
--   | Item String


routeMatcher : Parser (Route -> a) a
routeMatcher =
    oneOf
        [ Url.map Home (s "")
        , Url.map About (s "about")

        --    When needing parameters on the form base/item/3
        --    , Url.map Item (s "item" </> string)
        ]



-- INTERNAL --


routeToString : Route -> String
routeToString page =
    let
        pagePath =
            case page of
                Home ->
                    []

                About ->
                    [ "about" ]

        --    When needing parameters on the form base/item/3
        --                    Item id ->
        --                    [ "item",  id ]
    in
        "#/" ++ (String.join "/" pagePath)



-- PUBLIC HELPERS --


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)


modifyUrl : Route -> Cmd msg
modifyUrl =
    routeToString >> Navigation.modifyUrl


fromLocation : Location -> Maybe Route
fromLocation location =
    if String.isEmpty location.hash then
        Just Home
    else
        parseHash routeMatcher location
