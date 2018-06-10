module Page.About exposing (Model, Msg, init, update, view)

import Html exposing (Html, div, h2, text)


-- MODEL --


type alias Model =
    { pageTitle : String
    , pageBody : String
    }


init : Model
init =
    Model "About" "This is the aboutpage"



-- UPDATE --


type Msg
    = Todo


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Todo ->
            ( model, Cmd.none )



-- VIEW --


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text model.pageTitle ]
        , div [] [ text model.pageBody ]
        ]
