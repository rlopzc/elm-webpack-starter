module Page.NotFound exposing (view)

import Html exposing (Html, main_, h1, div, img, text)
import Html.Attributes exposing (class, tabindex, id, src, alt)


-- VIEW --


view : Html msg
view =
    main_ [ tabindex -1 ]
        [ h1 [] [ text "Not Found" ]
        ]
