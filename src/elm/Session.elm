module Session exposing (Session, fromViewer, navKey)

import Browser.Navigation as Nav


{-| Session management

This module is required to use Browser.application, which needs to store a Nav.Key
somewhere. This can evolve to have logged in Users

-}



-- TYPES


type
    Session
    -- = LoggedIn Nav.Key Viewer
    = Guest Nav.Key



-- INFO


navKey : Session -> Nav.Key
navKey (Guest key) =
    key



-- CHANGES


fromViewer : Nav.Key -> Session
fromViewer key =
    -- Here you receive a maybeViewer
    -- It's stored in localStorage as a JSON String;
    -- first decode the Value as a String, then
    -- decode that String as JSON.
    Guest key
