module Page.Home exposing (Model, Msg, init, subscriptions, toSession, update, view)

import Html exposing (Html, button, div, h2, h5, hr, p, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Session exposing (Session)



-- MODEL


type alias Model =
    { session : Session
    , pageTitle : String
    , pageBody : String
    , counter : Int
    }


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session
      , pageTitle = "Home"
      , pageBody = "This is the home page"
      , counter = 0
      }
    , Cmd.none
    )



-- VIEW


view : Model -> { title : String, content : Html Msg }
view model =
    { title = model.pageTitle
    , content =
        div [ class "container" ]
            [ h2 [] [ text model.pageTitle ]
            , div [] [ text model.pageBody ]
            , hr [] []
            , h5 [] [ text "Counter" ]
            , p []
                [ text (String.fromInt model.counter)
                ]
            , button [ onClick IncreaseCounter ] [ text "+" ]
            , button [ onClick DecreaseCounter ] [ text "-" ]
            ]
    }



-- UPDATE


type Msg
    = IncreaseCounter
    | DecreaseCounter


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        IncreaseCounter ->
            ( { model | counter = model.counter + 1 }, Cmd.none )

        DecreaseCounter ->
            ( { model | counter = model.counter - 1 }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- EXPORT


toSession : Model -> Session
toSession model =
    model.session
