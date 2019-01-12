module Route exposing (Route(..), fromUrl, href, replaceUrl)

import Browser.Navigation as Nav
import Html exposing (Attribute)
import Html.Attributes as Attr
import Url exposing (Url)
import Url.Parser as Parser exposing (Parser, oneOf, s)



-- ROUTING --


type Route
    = Home
    | Root
    | About



--    When needing parameters on the form base/item/id
--   | Item String


parser : Parser (Route -> a) a
parser =
    oneOf
        [ Parser.map Home Parser.top
        , Parser.map About (s "about")

        --    When needing parameters on the form base/item/3
        --    , Parser.map Item (s "item" </> string)
        ]



-- PUBLIC HELPERS --


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)


replaceUrl : Nav.Key -> Route -> Cmd msg
replaceUrl key route =
    Nav.replaceUrl key (routeToString route)


fromUrl : Url -> Maybe Route
fromUrl url =
    { url | path = Maybe.withDefault "" url.fragment, fragment = Nothing }
        |> Parser.parse parser



-- INTERNAL --


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                Home ->
                    []

                Root ->
                    []

                About ->
                    [ "about" ]

        --    When needing parameters on the form base/item/3
        --                    Item id ->
        --                    [ "item",  id ]
    in
    "#/" ++ String.join "/" pieces
