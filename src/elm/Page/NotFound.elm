module Page.NotFound exposing (view)

import Html exposing (Html, h1, main_, text)
import Html.Attributes exposing (tabindex)


-- VIEW --


view : Html msg
view =
    main_ [ tabindex -1 ]
        [ h1 [] [ text "Not Found" ]
        ]
