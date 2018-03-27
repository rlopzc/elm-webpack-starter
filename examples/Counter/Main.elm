module Main exposing (main)

import Html exposing (Html, div, h1, h5, text, button)
import Html.Events exposing (onClick)


-- MODEL --


type alias Model =
    Int


model : Model
model =
    0



-- VIEW --


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "Counter example" ]
        , h5 [] [ text <| "Current value: " ++ (toString model) ]
        , button [ onClick Increment ] [ text "Increment" ]
        ]



-- UPDATE --


type Msg
    = Increment


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1


main =
    Html.beginnerProgram { model = model, view = view, update = update }
